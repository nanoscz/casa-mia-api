const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class SaleService {
  async find () {
    const rta = await models.Sale.findAll({
      include: ['seller', 'customer', 'lot', 'modality']
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
