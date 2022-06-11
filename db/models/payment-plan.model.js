const { Model, DataTypes, Sequelize } = require('sequelize')
const { SALE_TABLE } = require('./sale.model')

const PAYMENT_PLAN_TABLE = 'payments_plan'

const PaymentPlanSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  payday: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'payday'
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paymentDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'payment_date'
  },
  paidOut: {
    field: 'paid_out',
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  saleId: {
    field: 'sale_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SALE_TABLE,
      key: 'id'
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class PaymentPlan extends Model {
  static associate (models) {
    this.hasMany(models.Lot, {
      as: 'lots',
      foreignKey: 'projectId'
    })
    this.belongsTo(models.Sale, { as: 'sale' })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: PAYMENT_PLAN_TABLE,
      modelName: 'PaymentPlan',
      timestamps: false
    }
  }
}

module.exports = { PAYMENT_PLAN_TABLE, PaymentPlanSchema, PaymentPlan }
