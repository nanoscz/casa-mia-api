const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(30)

const getProjectSchema = Joi.object({
  id: id.required()
})

const createProjectSchema = Joi.object({
  name: name.required()
})

const updateProjectSchema = Joi.object({
  name
})

module.exports = { getProjectSchema, createProjectSchema, updateProjectSchema }
