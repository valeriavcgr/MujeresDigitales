import { Injectable, NotFoundException } from '@nestjs/common';
import { IProduct } from 'src/interfaces';

@Injectable()
export class ProductsService {


    private products: IProduct[]=[
        {id: 1, name: "arroz", price:13500, stock: 10, description:"arroz 3000 gramos "},
        {id: 2, name: "leche", price:5500, stock: 15, description:"leche 1000 mililitos "},
        {id: 3, name: "pan", price:500, stock: 20, description:"pan coco "},
        {id: 4, name: "pollo", price:10000, stock: 5, description:"pollo x libra "},
        {id:5, name: "azucar", price: 4000, stock:24, description: "azucar morena x libras"}
    ]

    findAll(): IProduct[] {
        return this.products
    }

    findId(id:number): IProduct{
        const idFind = this.products.find((product)=>product.id === id)
        if(!idFind) throw new NotFoundException("Producto no encontrado")
            return idFind

    }

    findName(name:string): IProduct{
        const nameFind = this.products.find((product)=>product.name === name)
        if (!nameFind) throw new NotFoundException("Producto no encontrado")
            return nameFind
    }

    findPrice(price:number): IProduct{
        const priceFind = this.products.find((product)=> product.price === price)
        if(!priceFind) throw new NotFoundException("Producto no encontrado")
            return priceFind
    }
    findStock(stock:number): IProduct{
        const stockFind = this.products.find((product)=> product.stock === stock)
         if(!stockFind) throw new NotFoundException("Producto no encontrado")
            return stockFind
    }

    
}
