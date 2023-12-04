module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Serpientes', [
    {
      id_casilla: 16,
      id_nueva_casilla: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_casilla: 30,
      id_nueva_casilla: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_casilla: 34,
      id_nueva_casilla: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Serpientes', null, {}),
};