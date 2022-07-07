/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todo').del();

  await knex('todo').insert([
    { id: 1, title: 'IcanDoIt', description: 'Your I will is greater than your IQ', completed: false },
    { id: 2, title: 'Motivation', description: 'If you find comfort in your hardwork that is the way to go', completed: false },
    { id: 3, title: 'Comparison', description: 'If you place a burger and Home Made food in front of a person he will definately prefer the burger, so in order to be successful block the and remove the burgers and sorround yourself with your work.', completed: false }
  ]);
};
