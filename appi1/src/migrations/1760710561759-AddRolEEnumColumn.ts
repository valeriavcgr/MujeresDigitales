import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRolEEnumColumn1760710561759 implements MigrationInterface {
    name = 'AddRolEEnumColumn1760710561759'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`age\` \`age\` int NULL DEFAULT 'NULL'`);
    }

}
