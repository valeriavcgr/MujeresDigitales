import { Injectable, NotFoundException } from '@nestjs/common';
import { IProduct } from 'src/interfaces';

@Injectable()
export class ProductsService {

    // funcion que me valide si no hay productos
    private ifDontExists(product: IProduct | undefined): IProduct{ 
        if(!product) throw new NotFoundException("Producto no encontrado")
        return product
    }

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
            return this.ifDontExists(idFind)

    }

    findName(name:string): IProduct{
        const nameFind = this.products.find((product)=>product.name === name)
            return this.ifDontExists(nameFind)
    }

    findPrice(price:number): IProduct{
        const priceFind = this.products.find((product)=> product.price === price)
        if(!priceFind) throw new NotFoundException("Producto no encontrado")
            return this.ifDontExists(priceFind)
    }
    findStock(stock:number): IProduct{
        const stockFind = this.products.find((product)=> product.stock === stock)
         if(!stockFind) throw new NotFoundException("Producto no encontrado")
            return this.ifDontExists(stockFind)
    }

    create(product: Omit<IProduct, 'id'>): IProduct{
        const newIdP = 
        this.products.length > 0 
        ? this.products[this.products.length-1].id +1 
        :1;

        const newProduct: IProduct = {
            id: newIdP, ...product
        };
        this.products.push(newProduct);
        return newProduct;
    }

    update(id:number,newProduct: Omit<IProduct, 'id'>):IProduct{
        const productFind = this.findId(id);
        Object.assign(productFind, newProduct);
        return productFind;
    }
    remove(id:number){
        const userFind= this.products.findIndex((user)=>user.id === id); 
        this.products.splice(userFind, 1)
        return (`El producto con id ${id} fue eliminado exitosamente`); 
    }
    
}
