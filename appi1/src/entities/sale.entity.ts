import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
/**
 * Entidad Sale
 * Representa una venta registrada en el sistema
 */
@Entity()
export class Sale {
/**
* saleId: Identificador único de la venta
* Se genera automáticamente por la base de datos
*/
    @PrimaryGeneratedColumn()
    saleId: number;
/**
* userId: Identificador del usuario que realizó la venta
* Permite relacionar la venta con un usuario
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({ nullable: false })
    userId: number;
/**
* date: Fecha en la que se realizó la venta
* Almacena el momento exacto de la transacción
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({ nullable: false })
    date: Date;
/**
* totalPrice: Precio total de la venta
* Representa la suma total de todos los productos vendidos
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({ nullable: false })
    totalPrice: number;

}