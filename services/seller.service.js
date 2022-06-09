const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class SellerService {
  constructor () {}

  async find () {
    const rta = await models.Seller.findAll({
      include: ['user']
    })
    return rta
  }

  async findOne (id) {
    const seller = await models.Seller.findByPk(id, {
      include: ['user']
    })
    if (!seller) {
      throw boom.notFound('Seller not found')
    }
    return seller
  }

  async create (data) {
    const newSeller = await models.Seller.create(data, {
      include: ['user']
    })
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
    return { rta: true }
  }
}

module.exports = SellerService
