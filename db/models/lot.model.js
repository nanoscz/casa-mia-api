const { Model, DataTypes, Sequelize } = require('sequelize')
const { PROJECT_TABLE } = require('./project.model')

const LOT_TABLE = 'lots'

const LotSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  ubication: {
    allowNull: false,
    type: DataTypes.STRING
  },
  uv: {
    allowNull: false,
    type: DataTypes.STRING
  },
  mz: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lotNumber: {
    allowNull: false,
    field: 'lot_number',
    unique: true,
    type: DataTypes.STRING
  },
  dimension: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  available: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  projectId: {
    field: 'project_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROJECT_TABLE,
      key: 'id'
    }
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Lot extends Model {
  static associate (models) {
    this.belongsTo(models.Project, { as: 'project' })
    this.hasOne(models.Sale, {
      as: 'sale',
      foreignKey: 'lotId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: LOT_TABLE,
      modelName: 'Lot',
      timestamps: false
    }
  }
}

module.exports = { LOT_TABLE, LotSchema, Lot }
