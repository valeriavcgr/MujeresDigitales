import { MigrationInterface, QueryRunner } from "typeorm";
/**
 * InitMigration1760244492233:
 * Migración inicial del sistema
 * Genera las tablas principales: user, product y sale
 * Define las columnas, tipos de datos, claves primarias y restricciones unicas
 */
export class InitMigration1760244492233 implements MigrationInterface {
/** 
* name: Nombre identificador de la migración
* Se usa internamente por TypeORM para el control de versiones
*/
    name = 'InitMigration1760244492233'
/**
* up:
* Metodo que se ejecuta al generar la migracion
* Crea las tablas user, product y sale con sus respectivas columnas y restricciones respectivamente
* @param queryRunner: Permite ejecutar comandos SQL dentro de la migracion
*/
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`age\` int NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`stock\` int NOT NULL,\`status\` tinyint NOT NULL DEFAULT 1, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sale\` (\`saleId\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`date\` datetime NOT NULL, \`totalPrice\` int NOT NULL, PRIMARY KEY (\`saleId\`)) ENGINE=InnoDB`);
    }
/**
* down:
* Metodo que se ejecuta cuando la migracion es revertida
* Elimina las tablas creadas por el metodo up, restaurando el estado anterior de la base de datos
* @param queryRunner: Permite ejecutar comandos SQL dentro de la migración
*/
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`sale\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }
    

}
