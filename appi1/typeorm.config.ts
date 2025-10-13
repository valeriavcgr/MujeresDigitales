/*
 * Configuración principal de typeorm
 * Se encarga de establecer la conexion con la base de datos
 * Se definen las entidades y migraciones que usara la aplicacion
 */
import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm';
import { User } from './src/entities/user.entity';
import { Product } from './src/entities/product.entity';
import { Sale } from './src/entities/sale.entity';
/**
* Carga las variables de entorno definidas en el archivo .env
 * Asi son utilizarlas dentro de esta configuracion
 */
dotenv.config()
/**
 * Exporta una nueva instancia de DataSource
 * Instancia que define la conexion a la base de datos
 * Ademas de los parametros que typeorm usara para generar migraciones y mapear entidades
 */
export default new DataSource({
/**
* type:
* Indica el tipo de base de datos a utilizar
* host:
* Direccion del servidor de la base de datos
* Se obtiene desde la variable de entorno DB_HOST
* port:
* Puerto donde escucha la base de datos
* Se convierte a numero porque las variables de entorno son cadenas por defecto
* username:
* Usuario con permisos de acceso a la base de datos
* Se obtiene desde la variable de entorno DB_USERNAME
* password:
* Contraseña del usuario configurado para acceder a la base de datos
* Se obtiene desde la variable de entorno DB_PASSWORD
* database:
* Nombre de la base de datos a la que se conectara la aplicacion
* Se obtiene desde la variable de entorno DB_NAME
* entities:
* Lista de entidades que tyoeorm reconocera y mapeara
* Cada clase definida aquí representa una tabla en la base de datos.
* migrations:
* Define la ruta donde se ubicaran los archivos de migraciones
* Las migraciones son scripts que permiten crear, modificar o eliminar tablas
* de forma controlada dentro de la base de datos
*/
    type: 'mysql',
    host: process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:[User, Product, Sale],
    migrations: ['./src/migrations/*.ts'],
});
