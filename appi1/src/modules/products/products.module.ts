import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { UsersModule } from '../users/users.module';
import { Category } from 'src/entities/category.entity';
/**
* ProductsModule:
* Modulo encargado de gestionar toda la funcionalidad relacionada con los productos 
 * Agrupa el controlador, el servicio y la entidad de productos
 * Importa los recursos necesarios para interactuar con la base de datos
* TypeOrmModule.forFeature([Product]):
* Permite inyectar el repositorio de la entidad Product dentro del modulo, para poder realizar operaciones en la base de datos 
* UsersModule:
* Se importa el modulo de usuarios en caso de necesitar acceso o relacion entre productos y usuarios
* exports:
* Se exporta el repositorio de Product para que pueda ser utilizado por otros modulos del sistema
* controllers:
* Define el controlador encargado de manejar las rutas http relacionadas con los productos
* providers:
* Lista los servicios disponibles en el modulo, ya que contiene toda la logica de negocio de los productos
*/
@Module({
  imports:[
    TypeOrmModule.forFeature([Product, Category]),
    UsersModule
],
exports: [
  TypeOrmModule.forFeature([Product]),
   TypeOrmModule.forFeature([Category])
],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
