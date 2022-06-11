const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class PaymentPlanService {
  async find (query) {
    const options = {
      where: {},
      include: []
    }

    const { paidOut } = query
    if (paidOut) {
      options.where = {
        paidOut
      }
    }

    const { lotId } = query
    if (lotId) {
      options.include = [
        {
          as: 'sale',
          model: models.Sale,
          attributes: ['lotId'],
          required: true,
          include: [
            {
              as: 'lot',
              model: models.Lot,
              attributes: ['id'],
              required: true,
              where: {
                id: lotId
              }
            }
          ]
        }
      ]
    }

    const rta = await models.PaymentPlan.findAll(options)
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
