'use strict';
const data = require('../data/products.json'); 

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
      delete each.id 
      each.createdAt = each.updatedAt = new Date();
      each.slug = each.name.toLowerCase().replace(/\s+/g, '-')
      return each
    })
    await queryInterface.bulkInsert('Products', ready, {})

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
