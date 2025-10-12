import {IsInt, IsNotEmpty, IsDate } from "class-validator";

export type ISale ={saleId:number,userId:number, date:Date,totalPrice:number }

export class CreateSaleDTO{
    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @IsDate()
    date: Date;

    @IsNotEmpty()
    @IsInt()
    totalPrice:number
}
