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
    },
    {
      // ID = 3
      tipo: 'Ingreso',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 4
      tipo: 'Perdida',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Cartas', null, {}),
};

