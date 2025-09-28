import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get()
    findAll(){
        return this.userService.findAll();
    }
// DECORADOR PARA UN SOLO USUARIO
    @Get(':id')// AL VALOR QUE RECIBA DE LA PETICION SE VA A LLAMAR ID decorador Param para decirle que es un parametro de le peticion que voy a tomarel id que recibo es string y lo convierto a numero con Number para que lo reconozca el service
        findOne(@Param('id')id:string){
            return this.userService.findOne(Number(id))
        }
}
