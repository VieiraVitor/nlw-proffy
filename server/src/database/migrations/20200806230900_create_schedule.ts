import Knex from 'knex';

// alterações para serem realizadas
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.string('week_day').notNullable();
        table.string('from').notNullable();
        table.string('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    });
}

// rollback, se der merda volta tudo
export async function down(knex: Knex) {
    knex.schema.dropSchema('class_schedule');
}