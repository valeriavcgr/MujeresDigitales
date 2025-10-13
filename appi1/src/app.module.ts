import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';    
import { TypeOrmModule } from '@nestjs/typeorm';        
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { AuthModule } from './modules/auth/auth.module';
import { SalesModule } from './modules/sales/sales.module';
/**
 * AppModule:
 * Modulo principa de la aplicacion nest
 * Se encarga de integrar todos los modulos y configurar las dependencias globales
 * Incluye la configuración de la base de datos y la carga de variables de entorno
 */
@Module({
/**
* imports:
* Se importan todos los modulos necesarios para el funcionamiento
   * ConfigModule: para manejar variables de entorno
   * TypeOrmModule: para la conexion con la base de datos mysql
   * Modulos personalizados: UsersModule, ProductsModule, AuthModule y SalesModule
   */
  imports: [
/**
* ConfigModule:
* Permite acceder a las variables definidas en el archivo .env
* La opcion isGlobal: true lo hace accesible desde cualquier modulo
*/
  ConfigModule.forRoot({isGlobal: true}),
/**
* TypeOrmModule.forRootAsync:
* Configura la conexion con la base de datos de forma asincrona
* usando las variables del archivo .env a través del ConfigService
* type:
* Define el tipo de base de datos (mysql)
*/
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      type: 'mysql',
/**
* host:
* Direccion del servidor de la base de datos, que se obtiene desde el .env
* port:
* Puerto donde se ejecuta la base de datos
* username:
* Nombre de usuario con permisos para acceder a la base de datos
* password:
* Contraseña del usuario de la base de datos
* database:
* Nombre de la base de datos que se va a utilizar
*/
      host: config.get<string>('DB_HOST'),
      port: config.get<number>('DB_PORT'),
      username: config.get<string>('DB_USERNAME'),
      password: config.get<string>('DB_PASSWORD'),
      database: config.get<string>('DB_NAME'),
/**
* autoLoadEntities:
* Permite que typeorm cargue automaticamente todas las entidades registradas en los modulos
* synchronize:
* Si esta en true, sincroniza automáticamente las entidades con la base de datos
* Esta en false para evitar modificaciones automaticas en produccion
*/
      autoLoadEntities: true,
      synchronize: false,
    }),
  }),
/**
* UsersModule:
* Modulo encargado de la gestion de usuarios
* ProductsModule:
* Modulo encargado de la gestión de productos
* AuthModule:
* Modulo que maneja la autenticación y el inicio de sesion 
* SalesModule:
* Modulo que gestiona las ventas y sus operaciones
*/
  UsersModule,
  ProductsModule, 
  AuthModule, 
  SalesModule
],
/*
* controllers:
* Controladores principales del modulo
*/
  controllers: [AppController],
/*
* providers:
* Servicios principales del modulo
*/ 
  providers: [AppService],
})
export class AppModule {}
// aqui llamamos al modulo de users para que lo reconozca el app y el main 