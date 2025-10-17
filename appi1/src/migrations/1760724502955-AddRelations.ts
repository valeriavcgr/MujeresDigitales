import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelations1760724502955 implements MigrationInterface {
    name = 'AddRelations1760724502955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sale\` CHANGE \`userId\` \`userIdId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`categoryId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` ADD \`salesFKSaleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` ADD \`productFKId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`sale\` CHANGE \`userIdId\` \`userIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_ff0c0301a95e517153df97f6812\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` ADD CONSTRAINT \`FK_4f754c4f33cf17dd09eb74418e0\` FOREIGN KEY (\`salesFKSaleId\`) REFERENCES \`sale\`(\`saleId\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` ADD CONSTRAINT \`FK_14cf1fb8014b02309b84af0b837\` FOREIGN KEY (\`productFKId\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale\` ADD CONSTRAINT \`FK_3ea2456d5d6fe13e0f5859c241e\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sale\` DROP FOREIGN KEY \`FK_3ea2456d5d6fe13e0f5859c241e\``);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` DROP FOREIGN KEY \`FK_14cf1fb8014b02309b84af0b837\``);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` DROP FOREIGN KEY \`FK_4f754c4f33cf17dd09eb74418e0\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_ff0c0301a95e517153df97f6812\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`sale\` CHANGE \`userIdId\` \`userIdId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` DROP COLUMN \`productFKId\``);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` DROP COLUMN \`salesFKSaleId\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`categoryId\``);
        await queryRunner.query(`ALTER TABLE \`sale\` CHANGE \`userIdId\` \`userId\` int NOT NULL`);
    }

}
