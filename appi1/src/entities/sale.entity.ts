import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    saleId: number;

    @Column({ nullable: false })
    userId: number;

    @Column({ nullable: false })
    date: Date;

    @Column({ nullable: false })
    totalPrice: number;

}