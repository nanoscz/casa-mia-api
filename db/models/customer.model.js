const { Model, DataTypes, Sequelize } = require('sequelize')

const CUSTOMER_TABLE = 'customers'

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name'
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING
  },
  direction: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'direction'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Customer extends Model {
  static associate (models) {
    this.hasMany(models.Sale, {
      as: 'sale',
      foreignKey: 'customerId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
}

module.exports = { CustomerSchema, CUSTOMER_TABLE, Customer }
