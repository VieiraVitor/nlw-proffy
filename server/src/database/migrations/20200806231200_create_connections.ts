import Knex from 'knex';

// alterações para serem realizadas
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
}

// rollback, se der merda volta tudo
export async function down(knex: Knex) {
    knex.schema.dropSchema('class_schedule');
}