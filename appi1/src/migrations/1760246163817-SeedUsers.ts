import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUsers1760246163817 implements MigrationInterface {
    name = 'SeedUsers1760246163817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO user (name,age, email, password) VALUES
            ('Valeria',20,'vale@gmail.com','12345'),
            ('Ana',25,'ana@gmail.com','123483'),
            ('Maria',30,'may@yahoo.com','123456')
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM user WHERE email IN ('vale@gmail.com', 'ana@gmail.com')
            `)
    }

}
