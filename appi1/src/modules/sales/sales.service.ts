import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Sale } from 'src/entities/sale.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Sale)
    private saleRepo:Repository<Sale>,
    @InjectRepository(Product)
    private productRepo:Repository<Product>,
    @InjectRepository(User)
    private userRepo:Repository<User>
    ){}
    
    findAll() {
    return this.saleRepo.find();
    }
}
