const Joi = require('joi')

const id = Joi.number().integer()
const ubication = Joi.string().min(3).max(30)
const uv = Joi.string().min(3).max(30)
const mz = Joi.string().min(3).max(30)
const lotNumber = Joi.number()
const dimension = Joi.string().min(0).max(30)
const price = Joi.number()
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

module.exports = { getLotSchema, createLotSchema, updateLotSchema }
