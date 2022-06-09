const { Sequelize } = require('sequelize')

const { config } = require('./../config/config')
const chalk = require('chalk')
const setupModels = require('./../db/models')

const options = {
  dialect: 'mysql'
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
} else {
  options.logging = function (e) {
    console.log(`${chalk.blue('[SEQUELIZE]')} ${e}`)
  }
}

const sequelize = new Sequelize(config.dbUrl, options)

setupModels(sequelize)

module.exports = sequelize
