'use strict'

const { SellerSchema, SELLER_TABLE } = require('./../models/seller.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(SELLER_TABLE, SellerSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(SELLER_TABLE)
  }
}
