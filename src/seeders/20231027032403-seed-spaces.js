module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Casillas', [
    { // ID = 1
      posicion_v: 0,
      posicion_h: 0,
      tipo: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 2
      posicion_v: 0,
      posicion_h: 1,
      tipo: 'Escalera',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 3
      posicion_v: 0,
      posicion_h: 2,
      tipo: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 4
      posicion_v: 1,
      posicion_h: 2,
      tipo: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 5
      posicion_v: 2,
      posicion_h: 2,
      tipo: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 6
      posicion_v: 2,
      posicion_h: 1,
      tipo: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 7
      posicion_v: 3,
      posicion_h: 1,
      tipo: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 8
      posicion_v: 4,
      posicion_h: 1,
      tipo: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 9
      posicion_v: 4,
      posicion_h: 2,
      tipo: 'Tobogan',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { // ID = 10
      posicion_v: 4,
      posicion_h: 3,
      tipo: 'Normal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Casillas', null, {}),
};