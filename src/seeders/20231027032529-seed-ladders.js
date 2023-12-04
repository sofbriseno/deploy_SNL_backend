module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Escaleras', [
    {
      id_casilla: 2,
      id_nueva_casilla: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_casilla: 6,
      id_nueva_casilla: 18,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_casilla: 10,
      id_nueva_casilla: 22,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_casilla: 21,
      id_nueva_casilla: 32,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_casilla: 24,
      id_nueva_casilla: 35,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Escaleras', null, {}),
};