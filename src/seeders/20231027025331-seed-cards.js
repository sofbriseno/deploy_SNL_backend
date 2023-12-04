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
      tipo: 'Avanzar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      // ID = 3
      tipo: 'Avanzar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      // ID = 4
      tipo: 'Avanzar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      // ID = 5
      tipo: 'Avanzar',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      // ID = 6
      tipo: 'Retroceder',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      // ID = 7
      tipo: 'Retroceder',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Cartas', null, {}),
};

