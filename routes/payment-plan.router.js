const express = require('express')

const PaymentPlanService = require('../services/payment-plan.services')
const validationHandler = require('../middlewares/validator.handler')
const {
  getPaymentPlanSchema,
  createPaymentPlanSchema,
  updatePaymentPlanSchema,
  queryPaymentPlanByLotSchema
} = require('../schemas/payment-plan.schema')

const router = express.Router()
const service = new PaymentPlanService()

router.get('/',
  validationHandler(queryPaymentPlanByLotSchema, 'query'),
  async (req, res, next) => {
    try {
      res.json(await service.find(req.query))
    } catch (error) {
      next(error)
    }
  }
)

router.get('/:id',
  validationHandler(getPaymentPlanSchema, 'params'),
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
  validationHandler(createPaymentPlanSchema, 'body'),
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
  validationHandler(getPaymentPlanSchema, 'params'),
  validationHandler(updatePaymentPlanSchema, 'body'),
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
  validationHandler(getPaymentPlanSchema, 'params'),
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
