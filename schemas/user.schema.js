const Joi = require('joi')

const id = Joi.number().integer()
const email = Joi.string().email()
const password = Joi.string()

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  email
})

const getUserSchema = Joi.object({
  id: id.required()
})

const loginUserSchema = Joi.object({
  email,
  password
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema, loginUserSchema }
