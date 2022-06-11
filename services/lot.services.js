const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class LotService {
  async find () {
    const rta = await models.Lot.findAll()
    return rta
  }

  async findOne (id) {
    const rta = await models.Lot.findByPk(id, {
      include: 'project'
    })
    if (!rta) {
      throw boom.notFound('Lot not found')
    }
    return rta
  }

  async create (data) {
    const rta = await models.Lot.create(data)
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

module.exports = LotService
