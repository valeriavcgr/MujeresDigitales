import {IsInt, IsNotEmpty, MaxLength } from "class-validator";
import { Column } from "typeorm";

export type IProduct ={id:number, name: string, price:number, stock:number, status:boolean, description:string}

export class CreateProductDTO{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsInt()
    price:number

    @IsNotEmpty()
    @IsInt()
    stock:number

    @IsNotEmpty()
    status: boolean;

    @IsNotEmpty()
    @MaxLength(100)
    description:string

}