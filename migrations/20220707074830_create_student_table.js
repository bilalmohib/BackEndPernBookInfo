/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('student', (table) => {
        table.increments('id')
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('profile_picture');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('student');
};
