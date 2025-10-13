import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

/**
 * AuthModule:
 * Modulo principal encargado de gestionar la autenticacion del sistema
 * Agrupa el controlador, los servicios y las dependencias necesarias para registrar y autenticar usuarios
 */
@Module({
/**
* imports:
* Se definen los modulos y configuraciones que este modulo necesita para funcionar correctamente
*/
  imports:[
/**
* ConfigModule:
* Permite acceder a las variables de entorno del archivo .env de manera global en toda la aplicacion
     */
  ConfigModule.forRoot({isGlobal: true}),
/**
* TypeOrmModule:
* Permite que este modulo trabaje con la entidad User y su repositorio, authService puede acceder a la base de datos de usuarios
*/
  TypeOrmModule.forFeature([User]),
/**
* PassportModule:
* Modulo que facilita la integración de estrategias de autenticacion
*/
  PassportModule,
/**
* JwtModule:
* Configura el manejo de tokens JWT
* secret: Clave usada para firmar y validar tokens
* signOptions: Define el tiempo de duracion del token antes de expirar
*/
  JwtModule.register({
    secret:process.env.JWT_SECRET_KEY,
    signOptions: {expiresIn: process.env.JWT_EXPIRES_IN as any}
  })
],
/**
* providers:
* Servicios que se utilizan: AuthService, UserService
* AuthService: Contiene la lógica de autenticación (registro, login, generacion de tokens
* UsersService: Permite realizar operaciones sobre la entidad User
*/
  providers: [AuthService, UsersService],
/**
* controllers:
* Define el controlador asociado al modulo Auth.
* AuthController: Contiene las rutas HTTP relacionadas con autenticacion
*/
  controllers: [AuthController]
})
export class AuthModule {}
