import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import {UpdateProductDTO} from 'src/dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    findAll(){
        return this.productsService.findAll();
    }

    @Get('id/:id')
    findOne(@Param('id')id:string){
        return this.productsService.findId(Number(id))
    }

    @Get('name/:name')
    findName(@Param('name')name:string){
        return this.productsService.findName(name)
    }

    @Get('price/:price')
    findPrice(@Param('price')price:string){
        return this.productsService.findPrice(Number(price))
    }

    @Get('stock/:stock')
    findStock(@Param('stock')stock:number){
        return this.productsService.findStock(Number(stock))
    }

    @Post()
    create(@Body()body: CreateProductDTO){
        return this.productsService.create(body)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:UpdateProductDTO){
    return this.productsService.update(Number(id), body)
    }
    @Delete(':id')
    remove(@Param('id')id:string){
        return this.productsService.remove(Number(id))
    }
}