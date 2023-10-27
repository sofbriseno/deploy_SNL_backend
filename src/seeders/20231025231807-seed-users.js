module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Usuarios', [
    {
      nombre: 'sofiabriseno',
      contrasena: '@sofia123',
      mail: 'sofia.briseno@uc.cl',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'lauracid',
      contrasena: '@laura123',
      mail: 'laura.cid@uc.cl',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'nicolasgutierrez',
      contrasena: '@nicolas123',
      mail: 'njgutierrez@uc.cl',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      nombre: 'juanitaperez',
      contrasena: '@juanita123',
      mail: 'juanita@gmail.com',
      ranking: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Usuarios', null, {}),
};
