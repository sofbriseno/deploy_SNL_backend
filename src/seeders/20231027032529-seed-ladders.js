module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Escaleras', [
    {
      id_casilla: 2,
      id_nueva_casilla: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Escaleras', null, {}),
};