const express = require('express')

const ProjectService = require('../services/project.services')
const validationHandler = require('../middlewares/validator.handler')
const {
  getProjectSchema,
  createProjectSchema,
  updateProjectSchema
} = require('../schemas/project.schema')

const router = express.Router()
const service = new ProjectService()

router.get('/', async (req, res, next) => {
  try {
    res.json(await service.find())
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validationHandler(getProjectSchema, 'params'),
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
  validationHandler(createProjectSchema, 'body'),
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
  validationHandler(getProjectSchema, 'params'),
  validationHandler(updateProjectSchema, 'body'),
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
  validationHandler(getProjectSchema, 'params'),
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
