import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from 'src/entities/sale.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Sale)
    private saleRepo:Repository<Sale>
    ){}
    
    findAll() {
    return this.saleRepo.find();
    }
}
