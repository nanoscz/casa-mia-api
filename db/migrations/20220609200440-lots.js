'use strict'

const { LOT_TABLE, LotSchema } = require('../models/lot.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(LOT_TABLE, LotSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(LOT_TABLE)
  }
}
