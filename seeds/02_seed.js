/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('book').del();

  await knex('book').insert([
    { id: 1, book_name: 'Programmer Handy Notes', author: 'Sam Francisco', borrowed_by: 'bilal mohib', borrowed_date: '2020-07-21', return_date: '2022-10-01' },
    { id: 2, book_name: 'Starting Out With C++ From Control Strucutes through Objects', author: 'Tonny Gaddis', borrowed_by: 'Ammar Khan', borrowed_date: '2019-12-15', return_date: '2023-01-25' },
    { id: 3, book_name: 'Starting Out With Java From Control Strucutes through Objects', author: 'Tonny Gaddis', borrowed_by: 'Asfand Yar Khan', borrowed_date: '2017-05-20', return_date: '2025-10-15' },
  ]);
};
