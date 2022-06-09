const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class ProjectService {
  async find () {
    const rta = await models.Project.findAll()
    return rta
  }

  async findOne (id) {
    const rta = await models.Project.findByPk(id)
    if (!rta) {
      throw boom.notFound('Project not found')
    }
    return rta
  }

  async create (data) {
    const rta = await models.Project.create(data)
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

module.exports = ProjectService
