import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import {UpdateProductDTO} from 'src/dto/update-product.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { ParseLowerPipe } from 'src/common/pipes/parce-lower.pipe';
/**
 * ProductsController:
 * Controlador encargado de gestionar todas las rutas relacionadas con los productos
 * Permite realizar operaciones CRUD sobre los productos del sistema
* Constructor del controlador de productos
* Inyecta el servicio ProductsService, que contiene la logica de negocio de los productos
* @param productsService: Servicio de productos encargado de la gestion de datos
*/
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}
/*
* Endpoint: GET /products
* Obtiene todos los productos registrados en el sistema
* @returns:Lista completa de productos
*/  
    @Get()
    findAll(){
        return this.productsService.findAll();
    }
/**
* Endpoint: GET /products/:id
* Busca un producto especifico por su id
* @param id: Identificador unico del producto
* @returns: El producto correspondiente al id ingresado
*/
    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id:number){
        return this.productsService.findId(id)
    }
/**
* Endpoint: GET /products/name/:name
* Busca productos cuyo nombre coincida con el valor proporcionado
* @param name: Nombre o parte del nombre del producto
* @returns:Lista de productos que coinciden con el nombre indicado
*/
    @Get('name/:name')
    findName(@Param('name', ParseLowerPipe)name:string){
        return this.productsService.findName(name)
    }
/**
* Endpoint: GET /products/price/:price
* Busca productos que tengan un precio especifico
* @param price:Valor numerico del precio del producto
* @returns: Lista de productos con el precio indicado
*/
    @Get('price/:price')
    findPrice(@Param('price', ParseIntPipe)price:number){
        return this.productsService.findPrice(price)
    }
/**
* Endpoint: GET /products/stock/:stock
* Busca productos segun la cantidad disponible en el inventario
* @param stock: Numero de unidades en existencia del producto
* @returns: Lista de productos con el stock indicado
*/
    @Get('stock/:stock')
    findStock(@Param('stock', ParseIntPipe)stock:number){
        return this.productsService.findStock(stock)
    }
/**
* Endpoint: POST /products
* Crea un nuevo producto en el sistema
* @param body: Objeto con los datos del nuevo producto
* @returns: El producto recien creado y un mensaje de confirmacion
*/
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body()body: CreateProductDTO){
        return this.productsService.create(body)
    }
/**
* Endpoint: PUT /products/:id
* Actualiza los datos de un producto existente
* @param id: Identificador unico del producto a modificar
* @param body: Datos actualizados del producto
* @returns: Mensaje de exito y los datos actualizados del producto
*/
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() body:UpdateProductDTO){
    return this.productsService.update(id, body)
    }
/**
* Endpoint: DELETE /products/:id
* Elimina un producto especifico del sistema segun su id
* @param id: Identificador único del producto a eliminar
* @returns: Mensaje de confirmacion de eliminacion
*/
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id:number){
        return this.productsService.remove(id)
    }

}