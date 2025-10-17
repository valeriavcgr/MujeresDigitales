import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SalesService } from './sales.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { RolesE } from 'src/entities/user.entity';
import { Roles } from '../auth/roles.decorator';

@Controller('sales')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SalesController {
    constructor(private readonly salesService: SalesService){}

    
    @Get()
    @Roles(RolesE.ADMIN)
    findAllSale(){
        return this.salesService.findAllSale()
    }

    @Get('detail')
    @Roles(RolesE.ADMIN)
    findAllDetail(){
        return this.salesService.findAllDetail()
    }

    @Get(':id')
    @Roles(RolesE.ADMIN, RolesE.SELLER)
    findSaleById(@Param('id', ParseIntPipe)saleId:number){
        return this.salesService.findSaleById(saleId)
    }

    
    @Get('detail/:saleid')
    @Roles(RolesE.ADMIN, RolesE.SELLER)
    findDetailById(@Param('saleid', ParseIntPipe)saleId:number){
        return this.salesService.findDetailById(saleId)
    }

}
