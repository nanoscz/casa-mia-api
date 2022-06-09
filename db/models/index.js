const { User, UserSchema } = require('./user.model')
const { Seller, SellerSchema } = require('./seller.model')
const { Customer, CustomerSchema } = require('./customer.model')
const { Project, ProjectSchema } = require('./project.model')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Seller.init(SellerSchema, Seller.config(sequelize))
  Customer.init(CustomerSchema, Customer.config(sequelize))
  Project.init(ProjectSchema, Project.config(sequelize))

  User.associate(sequelize.models)
  Seller.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Project.associate(sequelize.models)
}

module.exports = setupModels
