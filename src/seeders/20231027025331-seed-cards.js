module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Cartas', [
    {
      // ID = 1
      tipo: 'Avanzar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      // ID = 2
      tipo: 'Retroceder',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Cartas', null, {}),
};

