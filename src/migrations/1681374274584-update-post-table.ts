import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatePostTable1681374274584 implements MigrationInterface {
    name = 'UpdatePostTable1681374274584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "age" integer NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'ghost', "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
