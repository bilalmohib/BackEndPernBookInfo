/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('todo', (table) => {
        table.increments('id')
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.boolean('completed').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('todo');
};
