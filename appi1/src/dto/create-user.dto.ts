//valida los datos que llegan al crear un usuario, se diferencia de la interfaz pq esta es para tipar los objetos y el dto es para validar los datos que llegan
//Y se pasan decoradores
import { IsEmail, IsNotEmpty, Max, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO{
    @IsNotEmpty() // valida que el nombre no venga vacio
    name: string;

    @IsNotEmpty()
    @IsEmail() // valida que el email tenga formato de email
    email:string; 

    @IsNotEmpty()
    @MinLength(6) // valida que la contraseña tenga minimo 6 caracteres
    @MaxLength(10) // y tenga maximo 12 caracteres
    password: string
}