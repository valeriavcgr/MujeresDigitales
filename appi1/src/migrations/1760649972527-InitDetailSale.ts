import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDetailSale1760649972527 implements MigrationInterface {
    name = 'InitDetailSale1760649972527'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`sale_detail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`subtotal\` int NOT NULL, \`unitPrice\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`category\` ADD \`name\` varchar(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`sale_detail\``);
    }

}
