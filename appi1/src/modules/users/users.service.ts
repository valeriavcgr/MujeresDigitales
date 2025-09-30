import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from 'src/interfaces';

@Injectable()
export class UsersService {

    private users: IUser[]= [
        {id: 1, name: "valeria", age: 20,email: "vale@gmail.com", password: "123456"},
        {id: 2, name: "David", age: 20, email: "david@gmail.com", password: "567890"},
        {id: 3, name: "Juan",  email: "juan@gmail.com", password: "900000"},
        {id: 4, name: "Jefferson", age: 23, email: "jeff@gmail.com", password: "000000"},
    ]

    findAll(): IUser[]{ // [] significa que me devuelve todo el arreglo
        return this.users
    }

    findOne(id:number):IUser{ // corchetos porque me va a devolver un solo objeto
        const userFind = this.users.find((user)=>user.id === id) // constante que busca en el array de users el id que le paso por parametro, si coincide me devuelve a la constante si no lo encuentra lanza una exception(no es un error)
        if(!userFind)throw new NotFoundException('Usuario no encontrado')
        return userFind // es como un if normal sin corchetes, el return es el else
    }

    // crear un usuario omitiendo el id porque este se genera automaticamente
    create(user: Omit<IUser, 'id'>):IUser{
        const newId = 
        this.users.length > 0 // si el arreglo tiene elementos
        ? this.users[this.users.length-1]. id +1 // acedemos al ultimo elemento del arreglo con -1(ya que empieza en 0) y a mi nuevo elemento le sumo 1 no se puede con ++, debe ser +1 
        :1; // SI NO HAY ELEMENTOS EN EL ARREGLO el id va a ser 1

        //creo el nuevo usuario que va a ser de tipo IUser
        const newUser: IUser = {
            id: newId, ...user
        };

        this.users.push(newUser);  // sumo mi nuevo usuario al arreglo
        return newUser; // me develve mi nuevo usuario
    }

    update(id:number,newUser: Omit<IUser, 'id'>): IUser{
        const userFind = this.findOne(id); // busco el usuario por id
        Object.assign(userFind, newUser);//metodo que me pide el objeto original y lo que le voy a cambiar PALABRA RESERVADA DE JS  
        return userFind; // me devuelve el usuario actualizado
    }
//  la funcion de encontrar el id = this.findOne(id) no se usa pq le pasamos el id pero el metodo slice busca la posicion del objeto en el array ->  3 != "3" posicion != id
    remove(id:number){
        const userFind= this.users.findIndex((user)=>user.id === id); //findIndex metodo de js para que busque la posicion del objeto dntro del array
        this.users.splice(userFind, 1)// metodo de arrays que remueve el objeto que le diga  (.id)
        return (`Usuario con id ${id} fue eliminado exitosamente`); // mensaje de confirmacion
    }

}
