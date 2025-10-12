/*
leer variables de entorno
*/
import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm';
import { User } from './src/entities/user.entity';
import { Product } from './src/entities/product.entity';
import { Sale } from './src/entities/sale.entity';
dotenv.config()

export default new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port:Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:[User, Product, Sale],
    migrations: ['./src/migrations/*.ts'],
});
