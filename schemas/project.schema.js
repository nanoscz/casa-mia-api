const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(30)
const description = Joi.string().min(3).max(255)
const getProjectSchema = Joi.object({
  id: id.required()
})

const createProjectSchema = Joi.object({
  name: name.required(),
  description
})

const updateProjectSchema = Joi.object({
  name,
  description
})

module.exports = { getProjectSchema, createProjectSchema, updateProjectSchema }
