import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import {IUser} from 'src/interfaces'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get()//lee
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')// AL VALOR QUE RECIBA DE LA PETICION SE VA A LLAMAR ID decorador Param para decirle que es un parametro de le peticion que voy a tomarel id que recibo es string y lo convierto a numero con Number para que lo reconozca el service
        findOne(@Param('id')id:string){
            return this.userService.findOne(Number(id))
        }

    @Post()//envia un cuerpo de frontend al backend
    create(@Body()body: Omit<IUser, 'id'>){
        return this.userService.create(body)
    }

    @Put(':id') // actualiza info
    update(@Param('id') id: string, @Body() body: Omit<IUser, 'id'>){
    return this.userService.update(Number(id), body)
    }

    @Delete(':id')
    remove(@Param('id')id:string){
        return this.userService.remove(Number(id))
    }

}
