import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1681574968319 implements MigrationInterface {
    name = 'UpdatePostTable1681574968319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "createAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(7) with time zone`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updateAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createAt"`);
    }

}
