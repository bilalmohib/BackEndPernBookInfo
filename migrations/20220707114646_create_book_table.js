/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable('book', (table) => {
        table.increments('id')
        table.string('book_name').notNullable();
        table.string('author').notNullable();
        table.string('borrowed_by');
        table.string('borrowed_date').notNullable();
        table.string('return_date').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('book');
};
