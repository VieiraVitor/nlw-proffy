import Knex from 'knex';

// alterações para serem realizadas
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

// rollback, se der merda volta tudo
export async function down(knex: Knex) {
    knex.schema.dropSchema('users');
}