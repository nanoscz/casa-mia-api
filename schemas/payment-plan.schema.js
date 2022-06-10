const Joi = require('joi')

const id = Joi.number().integer()
const payday = Joi.date()
const amount = Joi.number().integer()
const saldo = Joi.number().integer()
const paymentDate = Joi.date()
const status = Joi.string().valid('S','N')
const saleId = Joi.number().integer()

const getPaymentPlanSchema = Joi.object({
  id: id.required(),
})

const createPaymentPlanSchema = Joi.object({
  payday: payday.required(),
  amount: amount.required(),
  saldo: saldo.required(),
  paymentDate: paymentDate.required(),
  status: status.required(),
  saleId: saleId.required(),
})

const updatePaymentPlanSchema = Joi.object({
  payday,
  amount,
  saldo,
  paymentDate,
  status,
  saleId
})

module.exports = { getPaymentPlanSchema, createPaymentPlanSchema, updatePaymentPlanSchema }
