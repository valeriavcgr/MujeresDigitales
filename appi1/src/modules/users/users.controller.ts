import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { updateUserDTO } from 'src/dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesE } from 'src/entities/user.entity';
/**
 * UsersController:
 * Encargado de manejar las rutas y peticiones http relacionadas con la gestion de usuarios dentro del sistema
 * Actua como intermediario entre el cliente, peticiones HTTP, y el servicio UsersService
* Constructor del controlador de usuarios
* @param userService: Servicio de usuarios que contiene los metodos para manipular los datos en la base de datos
*/
@Controller('/api/users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
    constructor(private readonly userService: UsersService){}
/**
* Metodo findAll
* Ruta: GET /users  
* Obtiene todos los usuarios registrados en el sistema
* @returns: Lista completa de usuarios
*/
    @Get()
    @Roles(RolesE.ADMIN)
    findAll(){
        return this.userService.findAll();
    }
/**
* Metodo findOne 
* Ruta: GET /users/:id  
** Busca un usuario especifico por su identificador
* @param id: Identificador único del usuario a buscar
* @returns: Datos del usuario encontrado o una excepción si no existe
*/
    @Get(':id')
    @Roles(RolesE.ADMIN, RolesE.SELLER)
        findOne(@Param('id', ParseIntPipe)id:number){
            return this.userService.findOne(id)
        }
/**
* Metodo create
* Ruta: POST /users  
* Crea un nuevo usuario en la base de datos con los datos proporcionados en el body de la solicitud
* @param body: Objeto que contiene los datos del nuevo usuario, de tipo dto, CreateUserDTO
* @returns: El usuario recien creado
*/
    @Post()
    @Roles(RolesE.ADMIN)
    create(@Body()body: CreateUserDTO){
        return this.userService.create(body)
    }
/**
* Metodo update
* Ruta: PUT /users/:id  
* Actualiza la información de un usuario existente
* @param id: Identificador del usuario a actualizar
* @param body: Datos actualizados del usuario, de tipo dto,  updateUserDTO
* @returns: El usuario actualizado
*/
    @Put(':id')
    @Roles(RolesE.ADMIN)
    update(@Param('id', ParseIntPipe) id: number, @Body() body:updateUserDTO){
    return this.userService.update(id, body)
    }

/**
* Metodo: remove
* Ruta: DELETE /users/:id  
*Elimina un usuario de la base de datos segun su id
* @param id: Identificador del usuario a eliminar
* @returns: Mensaje de confirmacion de eliminacion
*/
    @Delete(':id')
    @Roles(RolesE.ADMIN)
    remove(@Param('id', ParseIntPipe)id:number){
        return this.userService.remove(id)
    }
}
