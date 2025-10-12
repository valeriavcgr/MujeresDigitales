import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from 'src/entities/sale.entity';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';

@Module({
  imports:[TypeOrmModule.forFeature([Sale]),
  UsersModule,
  ProductsModule
],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
