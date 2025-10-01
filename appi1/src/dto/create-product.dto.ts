import { IsIn, IsInt, IsNotEmpty, Max } from "class-validator";

export type IProduct ={id:number, name: string, price:number, stock:number, description:string}

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
    @Max(150)
    description:string

}