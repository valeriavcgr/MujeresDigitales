import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';
import { Product } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
/**
 * ProductsService:
 * Servicio encargado de manejar la logica de negocio relacionada con los productos
 * Este servicio interactua directamente con la base de datos mediante los repositorios de typeorm
 * Realiza operaciones CRUD sobre los productos
 */
@Injectable()
export class ProductsService {
/**
* Constructor del servicio de productos
* Inyecta los repositorios de product y user para permitir el acceso a sus tablas en la base de datos
* @param productRepo: Repositorio que permite realizar operaciones con la entidad Product
* @param userRepo:Repositorio de la entidad user, util si se requiere asociar usuarios a productos
*/
constructor(
    @InjectRepository(Product)
    private productRepo:Repository<Product>,
    @InjectRepository(User)
    private userRepo:Repository<User>
){}
/**
* Metodo privado: ifDontExists
* Verifica si un producto existe, si no, lanza una excepcion 
* @param product: Objeto producto o null si no existe en la base de datos
* @returns: El producto encontrado o lanza un error si no se encuentra
*/
    private ifDontExists(product: Product | null): Product{ 
        if(!product) throw new NotFoundException("Producto no encontrado")
        return product
    }
/**
* Metodo findAll
* Obtiene todos los productos activos con estado true de la base de datos 
 @returns: Lista de productos activos
*/
    findAll() {
        return this.productRepo.find({where:{status: true}});
    }
/**
* Metodo findId
* Busca un producto especifico por su id 
* @param id: Identificador único del producto
* @returns: El producto correspondiente al id ingresado
*/
   async findId(id:number){
        const idFind = await this.productRepo.findOneBy({id})
            return this.ifDontExists(idFind)
    }
/**
* Metodo findName
* Busca un producto especifico por su nombre
* @param name: Identificador del producto
* @returns: El producto correspondiente al nombre ingresado
*/
    async findName(name:string){
        const nameFind = await this.productRepo.findOneBy({name})
            return this.ifDontExists(nameFind)
    }
/**
* Metodo findPrice
* Busca un producto especifico por su precio
* @param price: Identificador del producto
* @returns: El producto correspondiente al precio ingresado
*/
    async findPrice(price:number){
        const priceFind = await this.productRepo.findOneBy({price})
            return this.ifDontExists(priceFind)
    }
/**
* Metodo findStock
* Busca un producto especifico por el stock
* @param stock: Identificador del producto
* @returns: El producto correspondiente al stock ingresado
*/
    async findStock(stock:number){
        const stockFind = await this.productRepo.findOneBy({stock})
            return this.ifDontExists(stockFind)
    }
/**
* Metodo create
* Crea y guarda un nuevo producto en la base de datos
* @param newProduct: Datos del producto a crear
* @returns: El producto recien creado y guardado
*/
    create(newProduct: CreateProductDTO){
        const productCreated= this.productRepo.create(newProduct)
        return this.productRepo.save(productCreated)
    }
/**
* Metodo update
* Actualiza los datos de un producto existente
* @param id: Identificador del producto a actualizar
* @param updateProduct: Datos nuevos a aplicar en el producto
* @returns: El producto actualizado
*/
    async update(id:number, updateProduct: UpdateProductDTO){
        await this.productRepo.update(id, updateProduct)
        return this.findId(id)
    }
/**
* Metodo remove
* Desactiva un producto cambiando su estado a falso
* No elimina el registro físicamente, sino que lo marca como inactivo 
* @param id:Identificador del producto a desactivar
* @returns Mensaje confirmando la desactivacion
*/
    async remove(id:number){
        const productFind = this.ifDontExists(await this.productRepo.findOneBy({id}))
        productFind.status = false 
        await this.productRepo.save(productFind)
        return (`El producto con id ${id} fue desactivado`); 
    }
}
