const { Model, DataTypes, Sequelize } = require('sequelize')

const { SELLER_TABLE } = require('./seller.model')
const { CUSTOMER_TABLE } = require('./customer.model')
const { LOT_TABLE } = require('./lot.model')
const { MODALITY_TABLE } = require('./modality.model')

const SALE_TABLE = 'sales'

const SaleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'date',
    defaultValue: Sequelize.NOW
  },
  contractNumber: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING(10),
    field: 'contract_number'
  },
  total: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  status: {
    allowNull: false,
    type: DataTypes.ENUM('Vigente', 'Cancelado', 'Riesgo', 'Revertido', 'Anulado')
  },
  sellerId: {
    field: 'seller_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SELLER_TABLE,
      key: 'id'
    }
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    }
  },
  lotId: {
    field: 'lot_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: LOT_TABLE,
      key: 'id'
    }
  },
  modalityId: {
    field: 'modality_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MODALITY_TABLE,
      key: 'id'
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  },
}

class Sale extends Model {
  static associate (models) {
    this.belongsTo(models.Seller, { as: 'seller'})
    this.belongsTo(models.Customer, { as: 'customer'})
    this.belongsTo(models.Lot, { as: 'lot'})
    this.belongsTo(models.Modality, { as: 'modality'})
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: SALE_TABLE,
      modelName: 'Sale'
    }
  }
}

module.exports = { SaleSchema, SALE_TABLE, Sale }
