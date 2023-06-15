"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Trackings",
      [
        {
          id_makanan: 1,
          id_user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_makanan: 2,
          id_user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more data as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Trackings", null, {});
  },
};
