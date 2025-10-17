import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from 'src/dto/create-category.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UpdateCategoryDTO } from 'src/dto/update-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    findAllCategory(){
        return this.categoryService.findAllCategory();
    }

    @Get(':id')
    findCategoryByID(@Param('id', ParseIntPipe)id:number){
        return this.categoryService.findCategoryById(id)
    }

    @Get('name/:name')
    findCategoryByName(@Param('name')name:string){
        return this.categoryService.findCategoryByName(name)
    }


    @UseGuards(JwtAuthGuard)
    @Post()
    createCategory(@Body()body:CreateCategoryDTO){
        return this.categoryService.createCategory(body)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    updateCategory(@Param('id', ParseIntPipe)id:number, @Body()body:UpdateCategoryDTO){
        return this.categoryService.updateCategory(id, body)

    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
        removeCategory(@Param('id', ParseIntPipe)id:number){
            return this.categoryService.removeCategory(id)
        }
}
