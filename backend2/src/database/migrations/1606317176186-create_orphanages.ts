import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1606317176186 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      //realiza as alterações no BD (criar tabela, campo, etc) 
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },

        {
          name: 'name',
          type: 'varchar',
        },

        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },

        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },

        {
          name: 'about',
          type: 'text',
        },

        {
          name: 'instructions',
          type: 'text',
        },

        {
          name: 'opening_hours',
          type: 'varchar',
        },

        {
          name: 'op_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      //desfaz as alterações do up (rollback)
    await queryRunner.dropTable('orphanages');
  }

}
