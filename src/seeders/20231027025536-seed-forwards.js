module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Avanzars', [
    {
      id_carta: 1,
      redireccion: 1,
      descripcion: '¡Avance Ligero! Esta tarjeta te permite avanzar una casilla.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_carta: 2,
      redireccion: 2,
      descripcion: '¡Doble salto! Esta tarjeta te permite avanza dos casilla.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_carta: 3,
      redireccion: 3,
      descripcion: '¡Triple Salto! Esta tarjeta te permite avanzar tres casillas de un solo movimiento.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_carta: 4,
      redireccion: 4,
      descripcion: '¡Cuatro Pasos Adelante! Con esta tarjeta, avanzas cuatro casillas de un solo paso.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_carta: 5,
      redireccion: 5,
      descripcion: '¡Cinco Peldaños de Golpe! Utiliza esta tarjeta para dar un salto de cinco casillas de una vez.',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Avanzars', null, {}),
};
