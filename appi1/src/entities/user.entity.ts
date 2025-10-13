import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
/**
 * Entidad User:
 * Representa un usuario dentro del sistema
 * Identificadores unicos: nombre, correo electrónico
 * edad opcional
 */
@Entity()
export class User{
/**
* id: Identificador único del usuario
* Se genera automáticamente por la base de datos
*/
    @PrimaryGeneratedColumn()
    id: number;
/**
* name: Nombre del usuario
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({nullable:false})
    name: string;
/**
* age: Edad del usuario
* Decorador:@Column({nullable:true}), para que el campo no sea obligatorio
*/
    @Column({nullable:true})
    age?: number;
/**
* email: Correo electrónico del usuario
* Decorador: @Column({ nullable: false }), para que el campo no sea nulo
*/
    @Column({nullable:false, unique:true})
    email:string;
/**
* password: Contraseña del usuario
* Es obligatoria y se utiliza para acceder al sistema
*/
    @Column()
    password: string
}
