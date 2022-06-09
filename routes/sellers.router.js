const express = require('express')

const SellerService = require('../services/seller.service')
const validationHandler = require('../middlewares/validator.handler')
const {
  createSellerSchema,
  getSellerSchema,
  updateSellerSchema
} = require('../schemas/seller.schema')

const router = express.Router()
const service = new SellerService()

router.get('/', async (req, res, next) => {
  try {
    res.json(await service.find())
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validationHandler(getSellerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await service.findOne(id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
)

router.post('/',
  validationHandler(createSellerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      res.status(201).json(await service.create(body))
    } catch (error) {
      next(error)
    }
  }
)

router.patch('/:id',
  validationHandler(getSellerSchema, 'params'),
  validationHandler(updateSellerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      res.status(201).json(await service.update(id, body))
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id',
  validationHandler(getSellerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      res.status(200).json(await service.delete(id))
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
