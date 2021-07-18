import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CommandLogTable1626558160454 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'command_log',
              columns: [
                {
                  name: 'id',
                  type: 'int4',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                	name: 'createdAt',
									type: 'timestamp',
									default: 'now()'
                },
                {
                  name: 'requestType',
                  type: 'varchar',
                  isNullable: false,
									length: "10"
                },
                {
                  name: 'command',
                  type: 'varchar',
                  isNullable: false,
									length: "100"
                },
                {
                  name: 'valid',
                  type: 'boolean',
                  isNullable: false
                },
                {
                  name: 'initialPositionX',
                  type: 'int2',
                  isNullable: false
                },
                {
                  name: 'initialPositionY',
                  type: 'int2',
                  isNullable: false
                },
                {
                  name: 'initialDirection',
                  type: 'varchar',
                  isNullable: false,
									length: '1'
                },
                {
                  name: 'finalPositionX',
                  type: 'int2',
                  isNullable: false
                },
                {
                  name: 'finalPositionY',
                  type: 'int2',
                  isNullable: false
                },
								{
                  name: 'finalDirection',
                  type: 'varchar',
                  isNullable: false,
									length: '1'
                },
              ],
            }),
            false,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`DROP TABLE command_log`);
    }

}
