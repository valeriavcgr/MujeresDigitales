import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from 'src/entities/sale.entity';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { SaleDetail } from 'src/entities/saleDetail.entity';
import { Category } from 'src/entities/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Sale, Product, User, SaleDetail, Category]),
  UsersModule,
  ProductsModule,
  SalesModule
],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
