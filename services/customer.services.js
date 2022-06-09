const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class CustomerService {
  async find () {
    const rta = await models.Customer.findAll()
    return rta
  }

  async findOne (id) {
    const rta = await models.Customer.findByPk(id)
    if (!rta) {
      throw boom.notFound('Customer not found')
    }
    return rta
  }

  async create (data) {
    const rta = await models.Customer.create(data)
    return rta
  }

  async update (id, changes) {
    const model = await this.findOne(id)
    const rta = await model.update(changes)
    return rta
  }

  async delete (id) {
    const model = await this.findOne(id)
    await model.destroy()
    return { id }
  }
}

module.exports = CustomerService
