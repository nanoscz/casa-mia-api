const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(3).max(50)
const lastName = Joi.string().min(3).max(50)
const phone = Joi.string().max(10)
const direction = Joi.string().max(255)

const getCustomerSchema = Joi.object({
  id: id.required()
})

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  direction: direction.required()
})

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  direction
})

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema }
