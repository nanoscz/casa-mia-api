const express = require('express')
const usersRouter = require('./users.router')
const sellerRouter = require('./sellers.router')

function routerApi (app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/users', usersRouter)
  router.use('/sellers', sellerRouter)
}

module.exports = routerApi
