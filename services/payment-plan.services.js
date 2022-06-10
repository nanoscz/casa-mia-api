const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class PaymentPlanService {
  async find () {
    const rta = await models.PaymentPlan.findAll({
      include: ['sale']
    })
    return rta
  }

  async findOne (id) {
    const rta = await models.PaymentPlan.findByPk(id, {
      include: ['sale']
    })
    if (!rta) {
      throw boom.notFound('PaymentPlan not found')
    }
    return rta
  }

  async create (data) {
    const rta = await models.PaymentPlan.create(data)
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

module.exports = PaymentPlanService
