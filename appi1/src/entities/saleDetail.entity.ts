import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}