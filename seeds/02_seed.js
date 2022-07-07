/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('student').del();

  await knex('student').insert([
    { id: 1, first_name: 'Muhammad', last_name: 'Ali', profile_picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/800px-Muhammad_Ali_NYWTS.jpg' },
    { id: 2, first_name: 'Muhammad', last_name: 'Bilal', profile_picture: 'https://media-exp2.licdn.com/dms/image/D4D35AQGUZHpq5EnnVA/profile-framedphoto-shrink_200_200/0/1656647188500?e=1657785600&v=beta&t=fOq6rhFvJsvuEMjuECoetJe5sDnmBCIzcSSGmyPIVgI' },
    { id: 3, first_name: 'Ammar', last_name: 'Mohib', profile_picture: 'https://media-exp2.licdn.com/dms/image/C4E03AQHfkSjT0tOhTQ/profile-displayphoto-shrink_200_200/0/1619987742513?e=1662595200&v=beta&t=NmG0JCAhLl51qgg1UULhDJniczduFykDLx3fK1rFL-M' }
  ]);
};
