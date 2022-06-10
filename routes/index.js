const express = require('express')
const usersRouter = require('./users.router')
const sellerRouter = require('./sellers.router')
const customerRouter = require('./customer.router')
const projectRouter = require('./project.router')
const LotRouter = require('./lot.router')
const ModalityRouter = require('./modality.router')
const SaleRouter = require('./sale.router')

function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/users', usersRouter)
  router.use('/sellers', sellerRouter)
  router.use('/customers', customerRouter)
  router.use('/projects', projectRouter)
  router.use('/lots', LotRouter)
  router.use('/modalities', ModalityRouter)
  router.use('/sales', SaleRouter)
}

module.exports = routerApi
