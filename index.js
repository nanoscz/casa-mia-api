const debug = require('debug')('casamia:api')
const express = require('express')
const cors = require('cors')
const chalk = require('chalk')
const routerApi = require('./routes')
const { config } = require('./config/config')
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
  handleFatalError
} = require('./middlewares/error.handler')

const app = express()
const port = config.port

app.use(express.json())

const whitelist = ['http://localhost:4200']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(options))

app.get('/ping', (req, res) => {
  res.send('pong')
})

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  debug('connecting...')
  console.log(
    `${chalk.green('[SERVER RUNNING]')} Server listening on port ${port}`
  )
})

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)
