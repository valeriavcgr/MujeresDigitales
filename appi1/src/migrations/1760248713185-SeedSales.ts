import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedSales1760248713185 implements MigrationInterface {
    name = 'SeedSales1760248713185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO sale (userId,date,totalPrice) VALUES
            (1,'2025-05-20',10000),
            (2,'2025-05-20',45800),
            (2,'2025-05-20',12600)
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM sale WHERE userId IN (2, 1)
            `)
    }

}
