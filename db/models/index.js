const { User, UserSchema } = require('./user.model')
const { Seller, SellerSchema } = require('./seller.model')
const { Customer, CustomerSchema } = require('./customer.model')
const { Project, ProjectSchema } = require('./project.model')
const { Lot, LotSchema } = require('./lot.model')
const { Modality, ModalitySchema } = require('./modality.model')
const { Sale, SaleSchema } = require('./sale.model')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Seller.init(SellerSchema, Seller.config(sequelize))
  Customer.init(CustomerSchema, Customer.config(sequelize))
  Project.init(ProjectSchema, Project.config(sequelize))
  Lot.init(LotSchema, Lot.config(sequelize))
  Modality.init(ModalitySchema, Modality.config(sequelize))
  Sale.init(SaleSchema, Sale.config(sequelize))

  User.associate(sequelize.models)
  Seller.associate(sequelize.models)
  Customer.associate(sequelize.models)
  Project.associate(sequelize.models)
  Lot.associate(sequelize.models)
  Sale.associate(sequelize.models)
}

module.exports = setupModels
