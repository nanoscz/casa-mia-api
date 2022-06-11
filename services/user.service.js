const boom = require('@hapi/boom')

const { models } = require('./../libs/sequelize')

class UserService {
  async create (data) {
    const newUser = await models.User.create(data)
    return newUser
  }

  async find () {
    const rta = await models.User.findAll({
      include: ['seller']
    })
    return rta
  }

  async findOne (id) {
    const user = await models.User.findByPk(id, {
      include: ['seller']
    })
    if (!user) {
      throw boom.notFound('user not found')
    }
    return user
  }

  async update (id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  async delete (id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id }
  }

  async login(email, password) {
    await models.User.findOne({ where: email}).then((user) => {
      if(user) return user
    })
  }
}

module.exports = UserService
