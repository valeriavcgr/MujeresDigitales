import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import {UpdateProductDTO} from 'src/dto/update-product.dto';
/**
 * ProductsController:
 * Controlador encargado de gestionar todas las rutas relacionadas con los productos
 * Permite realizar operaciones CRUD sobre los productos del sistema
 */
@Controller('products')
export class ProductsController {
/**
* Constructor del controlador de productos
* Inyecta el servicio ProductsService, que contiene la logica de negocio de los productos
* @param productsService: Servicio de productos encargado de la gestion de datos
*/
    constructor(private readonly productsService: ProductsService){}
/**
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
    findOne(@Param('id')id:string){
        return this.productsService.findId(Number(id))
    }
/**
* Endpoint: GET /products/name/:name
* Busca productos cuyo nombre coincida con el valor proporcionado
* @param name: Nombre o parte del nombre del producto
* @returns:Lista de productos que coinciden con el nombre indicado
*/
    @Get('name/:name')
    findName(@Param('name')name:string){
        return this.productsService.findName(name)
    }
/**
* Endpoint: GET /products/price/:price
* Busca productos que tengan un precio especifico
* @param price:Valor numerico del precio del producto
* @returns: Lista de productos con el precio indicado
*/
    @Get('price/:price')
    findPrice(@Param('price')price:string){
        return this.productsService.findPrice(Number(price))
    }
/**
* Endpoint: GET /products/stock/:stock
* Busca productos segun la cantidad disponible en el inventario
* @param stock: Numero de unidades en existencia del producto
* @returns: Lista de productos con el stock indicado
*/
    @Get('stock/:stock')
    findStock(@Param('stock')stock:string){
        return this.productsService.findStock(Number(stock))
    }
/**
* Endpoint: POST /products
* Crea un nuevo producto en el sistema
* @param body: Objeto con los datos del nuevo producto
* @returns: El producto recien creado y un mensaje de confirmacion
*/
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
    @Put(':id')
    update(@Param('id') id: string, @Body() body:UpdateProductDTO){
    return this.productsService.update(Number(id), body)
    }
/**
* Endpoint: DELETE /products/:id
* Elimina un producto especifico del sistema segun su id
* @param id: Identificador único del producto a eliminar
* @returns: Mensaje de confirmacion de eliminacion
*/
    @Delete(':id')
    remove(@Param('id')id:string){
        return this.productsService.remove(Number(id))
    }

}