import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { SaleDetail } from "./saleDetail.entity";
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

    @ManyToOne(() => User, user => user.salesId, { onDelete: 'CASCADE' })
    userId: User;

    @OneToMany(() => SaleDetail, detail => detail.salesFK)
    detailsFK: SaleDetail[];
}