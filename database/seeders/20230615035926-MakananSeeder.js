'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Makanans', [
      {
        nama: 'Nasi Putih',
        karbohidrat: 29.3,
        protein: 2.78,
        lemak: 0.29,
        karbon: 15,
        kalori: 135,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Tahu Goreng',
        karbohidrat: 1.36,
        protein: 2.23,
        lemak: 2.62,
        karbon: 10,
        kalori: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Ayam Goreng',
        karbohidrat: 16.15,
        protein: 32.9,
        lemak: 21.82,
        karbon: 12,
        kalori: 391,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
	{
        nama: 'Ikan goreng',
        karbohidrat: 3.32,
        protein: 36.82,
        lemak: 10.38,
        karbon: 10,
        kalori: 253,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Makanans', null, {});
  }
};
