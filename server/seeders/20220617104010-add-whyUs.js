"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("WhyUs", [
      {
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        text: "Karena kami memiliki beberapa keunggulan dalam menyajikan maupun mengolah data yang telah kami dapatkan untuk penilaian perusahaan tersebut",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("WhyUs", null, {});
  },
};
