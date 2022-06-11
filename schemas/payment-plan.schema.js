const Joi = require('joi')

const id = Joi.number().integer()
const payday = Joi.date()
const amount = Joi.number().integer()
const paymentDate = Joi.date()
const paidOut = Joi.boolean()
const saleId = Joi.number().integer()
const lotId = Joi.number().integer()

const getPaymentPlanSchema = Joi.object({
  id: id.required()
})

const createPaymentPlanSchema = Joi.object({
  payday: payday.required(),
  amount: amount.required(),
  paymentDate: paymentDate.required(),
  paidOut,
  saleId: saleId.required()
})

const updatePaymentPlanSchema = Joi.object({
  payday,
  amount,
  paymentDate,
  paidOut,
  saleId
})

const queryPaymentPlanByLotSchema = Joi.object({
  lotId,
  paidOut: id
})

module.exports = { getPaymentPlanSchema, createPaymentPlanSchema, updatePaymentPlanSchema, queryPaymentPlanByLotSchema }
