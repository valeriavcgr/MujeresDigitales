//valida los datos que llegan al crear un usuario, se diferencia de la interfaz pq esta es para tipar los objetos y el dto es para validar los datos que llegan
//Y se pasan decoradores
import { IsEmail, IsInt, IsNotEmpty, IsOptional,Min, Max, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO{
    @IsNotEmpty() // valida que el nombre no venga vacio
    name: string;

    @IsNotEmpty()
    @IsEmail() // valida que el email tenga formato de email
    email:string; 

    @IsNotEmpty()
    @MinLength(6) // minlength es para minimo de caracteres y  valida que la contraseña tenga minimo 6 caracteres
    @MaxLength(10) // y tenga maximo 12 caracteres
    password: string

    @IsOptional() // valida que la edad es opcional
    @IsInt() // valida que la edad sea un numero entero
    @Min(18)// minimo de numeros, asi valido que sea positivo el numero y mayor a 18
    age?:number; // el ? es para que sea opcional ese campo
}