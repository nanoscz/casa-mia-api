const { User, UserSchema } = require('./user.model')
const { Seller, SellerSchema } = require('./seller.model')

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Seller.init(SellerSchema, Seller.config(sequelize))

  User.associate(sequelize.models)
  Seller.associate(sequelize.models)
}

module.exports = setupModels
