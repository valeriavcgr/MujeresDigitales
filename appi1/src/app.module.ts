import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';            
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// aqui llamamos al modulo de users para que lo reconozca el app y el main 