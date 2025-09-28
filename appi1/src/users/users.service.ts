import { Injectable, NotFoundException } from '@nestjs/common';

export type IUser ={id: number, name: string, email:string}

@Injectable()
export class UsersService {

    private users: IUser[]= [
        {id: 1, name: "valeria", email: "vale@gmail.com"},
        {id: 2, name: "David", email: "david@gmail.com"},
        {id: 3, name: "Juan", email: "juan@gmail.com"},
        {id: 4, name: "Jefferson", email: "jeff@gmail.com"},
    ]

    findAll(): IUser[]{ // [] significa que me devuelve todo el arreglo
        return this.users
    }

    findOne(id:number):IUser{ // corchetos porque me va a devolver un solo objeto
        const userFind = this.users.find((user)=>user.id === id) // constante que busca en el array de users el id que le paso por parametro, si coincide me devuelve a la constante si no lo encuentra lanza una exception(no es un error)
        if(!userFind)throw new NotFoundException('Usuario no encontrado')
        return userFind // es como un if normal sin corchetes, el return es el else
    }
}
