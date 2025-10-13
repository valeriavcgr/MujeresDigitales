import { MigrationInterface, QueryRunner } from "typeorm";
/**
 * SeedSales1760248713185:
 * Migracion de carga inicial (SEMILLA) para la tabla sale
 * Inserta registros de ejemplo con datos de ventas
 */
export class SeedSales1760248713185 implements MigrationInterface {
/**
* name: Nombre identificador de la migracion
* Se utiliza por TypeORM para el control de versiones de migraciones
*/
    name = 'SeedSales1760248713185'
/**
* up:
* Metodo que se ejecuta al aplicar la migración
* Inserta registros de ventas en la tabla sale con datos de ejemplo
* @param queryRunner: Permite ejecutar comandos SQL dentro de la migracion
*/
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO sale (userId,date,totalPrice) VALUES
            (1,'2025-05-20',10000),
            (2,'2025-05-20',45800),
            (2,'2025-05-20',12600)
            `)
    }

/**
 * down:
* Metodo que se ejecuta al revertir la migracion
* Elimina los registros insertados en el metodo up,restaurando el estado anterior de la tabla sale
* @param queryRunner: Permite ejecutar comandos SQL dentro de la migracion
*/
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM sale WHERE userId IN (2, 1)
            `)
    }

}
