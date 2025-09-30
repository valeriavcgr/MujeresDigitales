export type IProduct ={id:number, name: string, price:number, stock:number, description:string}

export class CreateProductDTO{
    name: string;
    price:number
    stock:number
    description:string

}