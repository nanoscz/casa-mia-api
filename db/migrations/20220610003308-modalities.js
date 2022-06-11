'use strict'

const { MODALITY_TABLE, ModalitySchema } = require('./../models/modality.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(MODALITY_TABLE, ModalitySchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(MODALITY_TABLE)
  }
}
