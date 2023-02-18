'use strict';
const data = require('../data/users.json');
const { hashing } = require('../helpers');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const ready = data.map(each => {
      each.password = hashing(each.password)
      each.createdAt = each.updatedAt = new Date();
      return each
    })
    await queryInterface.bulkInsert('Users', ready, {})

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
