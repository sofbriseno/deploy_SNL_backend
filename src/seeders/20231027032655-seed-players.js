module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Jugadors', [
    {
      id_usuario: 1,
      id_partida: 1,
      personaje: 1,
      id_casilla: 1,
      dinero: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_usuario: 2,
      id_partida: 1,
      personaje: 2,
      id_casilla: 1,
      dinero: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_usuario: 3,
      id_partida: 1,
      personaje: 3,
      id_casilla: 1,
      dinero: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_usuario: 4,
      id_partida: 1,
      personaje: 4,
      id_casilla: 1,
      dinero: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Jugadors', null, {}),
};