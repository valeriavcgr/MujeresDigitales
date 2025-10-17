import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Sale } from 'src/entities/sale.entity';
import { SaleDetail } from 'src/entities/saleDetail.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
    constructor(@InjectRepository(Sale)
    private saleRepo:Repository<Sale>,
    @InjectRepository(SaleDetail)
    private detailtRepo:Repository<SaleDetail>,
    @InjectRepository(Product)
    private productRepo:Repository<Product>,
    @InjectRepository(User)
    private userRepo:Repository<User>
    ){}
    
    findAllSale() {
    return this.saleRepo.find()
    }

    async findSaleById(saleId:number){
        const idSaleFind = await this.saleRepo.findOneBy({saleId})
        if (!idSaleFind) throw new NotFoundException('Venta no encontrada')
        return idSaleFind
    }

    findAllDetail(){
        return this.detailtRepo.find()
    }

    async findDetailById(id:number){
        const idDetailFind = await this.detailtRepo.findOneBy({id})
        if (!idDetailFind) throw new NotFoundException('Detalle de venta no encontrad')
            return idDetailFind
    }

//primero crud en front
//si tengo tiempo carrito, ni no no->local storage solo front

}
