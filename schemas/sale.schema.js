const Joi = require('joi')

const id = Joi.number().integer()
const date = Joi.date()
const contractNumber = Joi.string().min(10).max(10)
const total = Joi.number().integer()
const status = Joi.string().valid('Vigente', 'Cancelado', 'Riesgo', 'Revertido', 'Anulado')
const sellerId = Joi.number().integer()
const customerId = Joi.number().integer()
const lotId = Joi.number().integer()
const modalityId = Joi.number().integer()

const getSaleSchema = Joi.object({
  id: id.required()
})

const createSaleSchema = Joi.object({
  date: date.required(),
  contractNumber: contractNumber.required(),
  total: total.required(),
  status: status.required(),
  sellerId: sellerId.required(),
  customerId: customerId.required(),
  lotId: lotId.required(),
  modalityId: modalityId.required()
})

const updateSaleSchema = Joi.object({
  date,
  contractNumber,
  total,
  status,
  sellerId,
  customerId,
  lotId,
  modalityId
})

module.exports = { getSaleSchema, createSaleSchema, updateSaleSchema }
