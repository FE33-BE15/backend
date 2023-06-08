"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "John Doe",
          email: "jhondoe@gmail.com",
          password: "123jhondoe45",
          age: 35,
          weight: 65,
          height: 165,
          gender: "Laki-Laki",
          activity: "Olahraga",
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Bianca Louis",
          email: "biancalouis@gmail.com",
          password: "123biancalouis45",
          age: 25,
          weight: 45,
          height: 160,
          gender: "Perempuan",
          activity: "Bekerja",
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
