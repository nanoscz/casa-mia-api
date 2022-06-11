const Joi = require('joi')

const id = Joi.number().integer()
const ubication = Joi.string().min(5).max(255)
const uv = Joi.number().integer()
const mz = Joi.number().integer()
const lotNumber = Joi.number().integer()
const dimension = Joi.string()
const price = Joi.number().integer()
const available = Joi.boolean()
const projectId = Joi.number()

const getLotSchema = Joi.object({
  id: id.required()
})

const createLotSchema = Joi.object({
  ubication: ubication.required(),
  uv: uv.required(),
  mz: mz.required(),
  lotNumber: lotNumber.required(),
  dimension: dimension.required(),
  price: price.required(),
  projectId: projectId.required()
})

const updateLotSchema = Joi.object({
  ubication,
  uv,
  mz,
  lotNumber,
  dimension,
  price,
  available,
  projectId
})

const queryLotSchema = Joi.object({
  available: id,
  projectId
})

module.exports = { getLotSchema, createLotSchema, updateLotSchema, queryLotSchema }
