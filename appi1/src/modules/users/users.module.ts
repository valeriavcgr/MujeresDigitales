import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
/**
 * UsersModule
 * Modulo encargado de agrupar todos los componentes relacionados con la gestion de usuarios
 * incluyendo el controlador, el servicio y la entidad correspondiente
 *Permite organizar el codigo de manera modular y reutilizable
 *Facilita la administracion de dependencias dentro del sistema
 */
@Module({
/**
* imports:
* Importa el modulo de typeorm y registra la entidad user para habilitar las operaciones con la base de datos a través del repositorio de typeorm
*/
  imports:[TypeOrmModule.forFeature([User])],
/**
* exports:
* Expone el modulo de typeorm con la entidad user para que otros modulos puedan utilizar el repositorio de usuarios
*/
  exports: [TypeOrmModule.forFeature([User])], 
/**
* controllers:
* Declara el controlador responsable de manejar las solicitudes http relacionadas con los usuarios
*/
  controllers: [UsersController],
/**
* providers:
* Registra el servicio de usuarios, el cual contiene toda la logica de negocio para la gestión de usuarios 
*/
  providers: [UsersService]
})
export class UsersModule {}
