import { MigrationInterface, QueryRunner } from "typeorm";
/**
 * SeedProducts1760247652866:
 * Migracion de carga inicial (semilla) para la tabla product
 * Inserta productos de ejemplo
 */
export class SeedProducts1760247652866 implements MigrationInterface {
/**
* name: Nombre identificador de la migracion
* Utilizado por TypeORM para el control de versiones de migraciones
*/
    name = 'SeedProducts1760247652866'
/**
* up:
* Metodo que se ejecuta al aplicar la migracion
* Inserta registros de productos en la tabla product
* @param queryRunner: Permite ejecutar comandos SQL dentro de la migracion
*/
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO product (name,price,stock,status, description) VALUES
            ('queso pera',20000,5,1,'queso pera por libra'),
            ('jamon serrano',2500,10,1,'jamon serrano importado por libra'),
            ('crema de leche',3000,15,1,'creama de leche por unidad')
            `)
    }
/**
* down:
* Metodo que se ejecuta al revertir la migracion
* Elimina los registros insertados por el metodo up, utilizando el campo stock para identificar los productos creados
* @param queryRunner: Permite ejecutar comandos SQL dentro de la migracion
*/
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM product WHERE stock IN (5, 10, 15)
            `)
    }

}
