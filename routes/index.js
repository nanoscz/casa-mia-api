const express = require('express')
const usersRouter = require('./users.router')
const sellerRouter = require('./sellers.router')
const customerRouter = require('./customer.router')
const projectRouter = require('./project.router')

function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/users', usersRouter)
  router.use('/sellers', sellerRouter)
  router.use('/customers', customerRouter)
  router.use('/projects', projectRouter)
}

module.exports = routerApi
