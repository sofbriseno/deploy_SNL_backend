module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Serpientes', [
    {
      id_casilla: 9,
      id_nueva_casilla: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Serpientes', null, {}),
};