'use strict'

const { PAYMENT_PLAN_TABLE, PaymentPlanSchema } = require('./../models/payment-plan.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PAYMENT_PLAN_TABLE, PaymentPlanSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PAYMENT_PLAN_TABLE)
  }
}
