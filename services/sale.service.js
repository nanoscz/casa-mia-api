const boom = require('@hapi/boom')
const { Op } = require('sequelize')
const { models } = require('../libs/sequelize')

class SaleService {
  async find (query) {
    const options = {
      where: {},
      include: []
    }

    const { include } = query
    if (include === 'true') {
      options.include = ['seller', 'customer', 'lot', 'modality']
    }

    const { status } = query
    if (status) {
      options.where.status = status
    }

    const { modalityId } = query
    if (modalityId) {
      options.where.modalityId = modalityId
    }

    const { sellerId } = query
    if (sellerId) {
      options.where.sellerId = sellerId
    }

    const { startDate, endDate } = query
    if (startDate && endDate) {
      options.where.date = {
        [Op.between]: [startDate, endDate]
      }
    }

    const rta = await models.Sale.findAll({
      include: options.include,
      where: options.where
    })
    return rta
  }

  async findOne (id) {
    const Sale = await models.Sale.findByPk(id, {
      include: ['seller', 'customer', 'lot', 'modality']
    })
    if (!Sale) {
      throw boom.notFound('Sale not found')
    }
    return Sale
  }

  async create (data) {
    const newSeller = await models.Sale.create(data)
    return newSeller
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

module.exports = SaleService
