import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SalesService } from './sales.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SalesService){}

    @UseGuards(JwtAuthGuard)
    @Get()
    findAllSale(){
        return this.salesService.findAllSale()
    }

    @UseGuards(JwtAuthGuard)
    @Get('detail')
    findAllDetail(){
        return this.salesService.findAllDetail()
    }

    @Get(':id')
    findSaleById(@Param('id', ParseIntPipe)saleId:number){
        return this.salesService.findSaleById(saleId)
    }

    @UseGuards(JwtAuthGuard)
    @Get('detail/:saleid')
    findDetailById(@Param('saleid', ParseIntPipe)saleId:number){
        return this.salesService.findDetailById(saleId)
    }

}
