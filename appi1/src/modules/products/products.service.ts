import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
constructor(@InjectRepository(Product)
private productRepo:Repository<Product>
){}

    private ifDontExists(product: Product | undefined): Product{ 
        if(!product) throw new NotFoundException("Producto no encontrado")
        return product
    }

    findAll() {
        return this.productRepo.find();
    }

    findId(id:number){
        const idFind = this.productRepo.findOneBy({id})
            return this.ifDontExists(idFind)

    }

    findName(name:string): IProduct{
        const nameFind = this.productRepo.findOneBy({name: name})
            return this.ifDontExists(nameFind)
    }

    findPrice(price:number): IProduct{
        const priceFind = this.products.find((product)=> product.price === price)
            return this.ifDontExists(priceFind)
    }
    findStock(stock:number): IProduct{
        const stockFind = this.products.find((product)=> product.stock === stock)
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
    remove(id:number):String{
        //valido que el producto a eliminar exista
        const product = this.findId(id);
        // si existe entonces lo elimino por el indice 
        const productFind= this.products.findIndex((product)=>product.id === id);
        this.products.splice(productFind, 1)
        return (`El producto con id ${id} fue eliminado exitosamente`); 
    }
    
}
