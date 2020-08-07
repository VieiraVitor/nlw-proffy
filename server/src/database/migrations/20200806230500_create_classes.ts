import Knex from 'knex';

// alterações para serem realizadas
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

// rollback, se der merda volta tudo
export async function down(knex: Knex) {
    knex.schema.dropSchema('classes');
}