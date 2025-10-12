import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedProducts1760247652866 implements MigrationInterface {
    name = 'SeedProducts1760247652866'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO product (name,price,stock,status, description) VALUES
            ('queso pera',20000,5,1,'queso pera por libra'),
            ('jamon serrano',2500,10,1,'jamon serrano importado por libra'),
            ('crema de leche',3000,15,1,'creama de leche por unidad')
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM product WHERE stock IN (5, 10, 15)
            `)
    }

}
