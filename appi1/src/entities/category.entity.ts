import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false})
    description: string;

    @OneToMany(() => Product, product => product.category)
    productId: Product[];

}