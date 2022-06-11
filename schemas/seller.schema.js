const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(5).max(50)
const lastName = Joi.string().min(5).max(50)
const phone = Joi.string().min(7).max(10)
const userId = Joi.number().integer()
const email = Joi.string().email()
const password = Joi.string()

const getSellerSchema = Joi.object({
  id: id.required()
})

const createSellerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
})

const updateSellerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
})

module.exports = { getSellerSchema, createSellerSchema, updateSellerSchema }
