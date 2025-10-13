import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { updateUserDTO } from 'src/dto/update-user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
/**
 * UsersService:
 * Servicio responsable de manejar la logica de negocio relacionada con los usuarios
 * Interactua directamente con la base de datos mediante el repositorio de typeorm
 * Permite realizar operaciones CRUD sobre los usuarios
 */
@Injectable()
export class UsersService {
/**
* Constructor del servicio de usuarios
* Inyecta el repositorio de user para permitir el acceso a la tabla correspondiente en la base de datos
* @param userRepo: Repositorio que permite realizar operaciones con la entidad user
*/
    constructor(@InjectRepository(User)
    private userRepo:Repository<User>
    ){}
/**
* Constructor del servicio de usuarios
* Inyecta el repositorio de User para permitir el acceso a la tabla correspondiente en la base de datos
* @param userRepo: Repositorio que permite realizar operaciones con la entidad user
*/
    findAll(){ 
        return this.userRepo.find(); 
    }

/**
* Metodo findOne
* Busca un usuario específico según su id 
* @param id: Identificador unico del usuario
* @returns: El usuario correspondiente o lanza una excepción si no se encuentra
*/
    async findOne(id:number){ 
        const userFind = await this.userRepo.findOneBy({id})
        if(!userFind)throw new NotFoundException('Usuario no encontrado')
        return userFind
    }
/**
* Metodo create
* Crea y guarda un nuevo usuario en la base de datos
* @param newUser: Datos del nuevo usuario a registrar
* @returns: El usuario recién creado
*/
    create(newUser:CreateUserDTO){
        const userCreated= this.userRepo.create(newUser)
        return this.userRepo.save(userCreated)
    }

/**
* Metodo update
* Actualiza la informacion de un usuario existente
* @param id: Identificador del usuario a actualizar
* @param updateUser: Datos actualizados del usuario
* @returns El usuario actualizado
*/
    async update(id:number, updateUser:updateUserDTO){
       await this.userRepo.update(id, updateUser)
        return this.findOne(id)
    }
/**
* Metodo remove
* Elimina un usuario de la base de datos segun su id
* Si el usuario no existe, lanza una excepcion
* @param id: Identificador del usuario a eliminar
* @returns: Mensaje confirmando la eliminación del usuario
*/
    async remove(id:number){
        const deleteUser = await this.userRepo.delete(id)
        if(deleteUser.affected === 0) throw new NotFoundException('Usuario no encontrado')
        return {message: `Usuario con id ${id} se ha eliminado correctamente`};
    }
}
