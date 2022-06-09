'use strict'

const { ProjectSchema, PROJECT_TABLE } = require('./../models/project.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PROJECT_TABLE, ProjectSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PROJECT_TABLE)
  }
}
