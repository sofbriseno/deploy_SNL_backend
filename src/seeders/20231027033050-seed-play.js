module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Juegas', [
    {
      id_partida: 1,
      id_jugador: 1,
      num: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_partida: 1,
      id_jugador: 2,
      num: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_partida: 1,
      id_jugador: 3,
      num: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id_partida: 1,
      id_jugador: 4,
      num: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Juegas', null, {}),
};