const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(30)
const increase = Joi.number().integer()

const getModalitySchema = Joi.object({
  id: id.required()
})

const createModalitySchema = Joi.object({
  name: name.required(),
  increase: increase.required()
})

const updateModalitySchema = Joi.object({
  name,
  increase
})

module.exports = { getModalitySchema, createModalitySchema, updateModalitySchema }
