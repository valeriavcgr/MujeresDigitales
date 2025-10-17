import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { loginDTO } from 'src/dto/login.dto';
import { User } from 'src/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
/**
 * AuthService:
 * Servicio encargado de gestionar la autenticación de usuarios
 * Contiene los metodos para registrar nuevos usuarios y para iniciar sesion, mediante la verificación de credenciales y generación de tokens
* Constructor del servicio de autenticacion
@param userRepo: Repositorio de la entidad user para interactuar con la base de datos
* @param jwtService: Servicio de NestJS que permite generar y firmar tokens
*/
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo:Repository<User>,
        private jwtService:JwtService
    ){}
/**
* register:
* Metodo para registrar un nuevo usuario en el sistema
* Encripta la contraseña del usuario con bcrypt
* Crea un nuevo registro con los datos proporcionados
* Guarda el usuario en la base de datos
* @param data: Objeto con la información del nuevo usuario (CreateUserDTO)
* @returns: Un mensaje de confirmación y los datos básicos del usuario registrado
     */
    async register(data: CreateUserDTO){
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const userCreated = this.userRepo.create({...data, password: hashedPassword});
        await this.userRepo.save(userCreated);
        return {message: 'Usuario registrado con exito', user: {id: userCreated.id, email: userCreated.email}}
    }
/**
* login:
* Metodo para autenticar a un usuario existente
* Busca el usuario por su correo electrónico
* Verifica si el usuario existe
* Compara la contraseña ingresada con la almacenada encriptada
* Si las credenciales son válidas, genera un JWT (token)con la información del usuario
* @param data: Objeto con las credenciales del usuario.
* @returns: Un objeto con el token de acceso generado
* @throws: UnauthorizedException si las credenciales son incorrectas
*/
     async login(data: loginDTO){
        const user = await this.userRepo.findOne({where:{email:data.email}})
        
        if(!user){
            throw new UnauthorizedException("Credenciales invalidas")
        }
        const isPasswordValid = await bcrypt.compare(data.password, user.password)
        if(!isPasswordValid){
            throw new UnauthorizedException("Credenciales invalidas")
        }

        const bodyToken = {ing:user.id, name: user.name, email: user.email, role:user.role};
        const token = await this.jwtService.signAsync(bodyToken);
        return {
            accessToken: token
        }
    }
}
