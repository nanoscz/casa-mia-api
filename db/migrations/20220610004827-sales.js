'use strict'

const { SALE_TABLE, SaleSchema } = require('./../models/sale.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(SALE_TABLE, SaleSchema, {
      uniqueKeys: {
        sale_unique: {
            fields: ['status', 'customer_id', 'lot_id']
        }
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable(SALE_TABLE)
  }
}
