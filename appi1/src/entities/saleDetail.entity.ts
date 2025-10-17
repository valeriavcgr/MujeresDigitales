import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Sale } from "./sale.entity";

@Entity()
export class SaleDetail{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    quantity: number;

    @Column({nullable: false })
    subtotal:number;

    @Column({ nullable: false })
    unitPrice: number;

    @ManyToOne(() => Sale, sale => sale.detailsFK, { onDelete: 'CASCADE' })
    salesFK:number

    @ManyToOne(() => Product, product => product.details, { onDelete: 'CASCADE' })
    productFK:number

}