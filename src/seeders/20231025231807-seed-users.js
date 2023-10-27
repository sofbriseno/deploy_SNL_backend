module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Usuarios', [
    {
      nombre: 'sofiabriseno',
      contrasena: 'sofia123',
      mail: 'sofia.briseno@uc.cl',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'lauracid',
      contrasena: 'laura123',
      mail: 'laura.cid@uc.cl',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Usuarios', null, {}),
};
