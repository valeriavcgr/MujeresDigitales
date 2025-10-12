import {IsInt, IsNotEmpty, MaxLength } from "class-validator";

export type ISale ={saleId:number, name: string, userId:number, date:Date,totalPrice:number }

export class CreateSaleDTO{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsInt()
    price:number

    @IsNotEmpty()
    @IsInt()
    stock:number

    @IsNotEmpty()
    @MaxLength(100)
    description:string

}
