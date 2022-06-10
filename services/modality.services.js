const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class ModalityService {
  async find () {
    const rta = await models.Modality.findAll()
    return rta
  }

  async findOne (id) {
    const rta = await models.Modality.findByPk(id)
    if (!rta) {
      throw boom.notFound('Modality not found')
    }
    return rta
  }

  async create (data) {
    const rta = await models.Modality.create(data)
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

module.exports = ModalityService
