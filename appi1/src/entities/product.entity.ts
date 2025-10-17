import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { SaleDetail } from "./saleDetail.entity";
/**
 * Entidad Product:
 * Representa un producto dentro de la base de datos
 * Identificadores unicos: nombre, precio
 * cantidades: stock, estado
 * una descripción
 */
@Entity()
export class Product {
/**
* id: Identificador único del producto
*Decorador:@PrimaryGeneratedColumn
*Se genera de manera automatica por la base de datos
*/
    @PrimaryGeneratedColumn()
    id: number;
/**
* name: Nombre del producto
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({ nullable: false })
    name: string;

/**
* price: Precio del producto
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({ nullable: false })
    price: number;
/**
* stock: Cantidad disponible del producto
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({ nullable: false })
    stock: number;
/**
* status: Estado del producto
* Indica si el producto está activo (true) o inactivo (false)
* Por defecto, se establece como true
*/
    @Column({ nullable: false, default: true })
    status: boolean;
/**
* description: Descripción del producto.
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({ nullable: false})
    description: string;

    @ManyToOne(() => Category, category => category.productId, { onDelete: 'SET NULL' })
    category: Category;

    @OneToMany(() => SaleDetail, detail => detail.productFK)
    details: SaleDetail[];
}