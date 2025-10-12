import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { updateUserDTO } from 'src/dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
        findOne(@Param('id')id:string){
            return this.userService.findOne(Number(id))
        }

    @Post()
    create(@Body()body: CreateUserDTO){
        return this.userService.create(body)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:updateUserDTO){
    return this.userService.update(Number(id), body)
    }

    @Delete(':id')
    remove(@Param('id')id:string){
        return this.userService.remove(Number(id))
    }

}
