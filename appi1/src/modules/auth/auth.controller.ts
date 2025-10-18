import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDTO } from 'src/dto/login.dto';
import { CreateUserDTO } from 'src/dto/create-user.dto';
/**
 * AuthController:
 * Controlador responsable de manejar las rutas relacionadas con la autenticacion de usuarios
 * Define los endpoints para el registro y el inicio de sesion
* Constructor del controlador de autenticacion
* Inyecta el servicio AuthService, que contiene la logica de registro y autenticacion
* @param authService: Servicio que gestiona las operaciones de autenticacion
*/
@Controller('/api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
/**
* Endpoint: POST /auth/register
* Permite registrar un nuevo usuario en el sistema.
* @param data: Datos del usuario que se desea registrar
* @returns Mensaje de confirmación y los datos básicos del usuario creado
*/
    @Post('register')
    regisyer(@Body()data: CreateUserDTO){
        return this.authService.register(data);
    }
/**
* Endpoint: POST /auth/login
* Permite a un usuario autenticarse en el sistema y obtener un token JWT
* @param data: Credenciales del usuario
* @returns: Un objeto con el token de acceso
*/
    @Post('login')
    login(@Body() data:loginDTO){
        return this.authService.login(data);
    }
/*
* Endpoint: GET /auth/profile
*@UseGuards:Le indica a la ruta que debe usar mi Jwt
* Decodifica la información del token
* @Request:Inyecta el objeto solicitado y lo inyecta en la variable info
* @returns: L informacion del usuario logiado
*/
 @Get('profile')
    getprofile(@Request()info){
        return info.user
    }
}
