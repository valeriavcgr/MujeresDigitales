import { IsNotEmpty } from "class-validator";

export type IProduct ={id:number, name: string, price:number, stock:number, description:string}

export class CreateProductDTO{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    price:number
    @IsNotEmpty()
    stock:number
    @IsNotEmpty()
    description:string

}