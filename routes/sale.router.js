const express = require('express')

const SaleService = require('../services/sale.service')
const validationHandler = require('../middlewares/validator.handler')
const {
  getSaleSchema,
  createSaleSchema,
  updateSaleSchema,
  querySaleSchame
} = require('../schemas/sale.schema')

const router = express.Router()
const service = new SaleService()

router.get('/',
  validationHandler(querySaleSchame, 'query'),
  async (req, res, next) => {
    try {
      res.json(await service.find(req.query))
    } catch (error) {
      next(error)
    }
  })

router.get('/:id',
  validationHandler(getSaleSchema, 'params'),
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
  validationHandler(createSaleSchema, 'body'),
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
  validationHandler(getSaleSchema, 'params'),
  validationHandler(updateSaleSchema, 'body'),
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
  validationHandler(getSaleSchema, 'params'),
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
