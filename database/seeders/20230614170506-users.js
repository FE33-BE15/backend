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
          age: 35,
          weight: 65,
          height: 165,
          activity: "Olahraga",
          password: "123jhondoe45",
          gender: "Laki-Laki",
          calori: 1549.495,
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
