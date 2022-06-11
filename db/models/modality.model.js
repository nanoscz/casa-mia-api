const { Model, DataTypes, Sequelize } = require('sequelize')

const MODALITY_TABLE = 'modalities'

const ModalitySchema = {
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
  increase: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Modality extends Model {
  static associate (models) {
    this.hasOne(models.Sale, {
      as: 'sale',
      foreignKey: 'modalityId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: MODALITY_TABLE,
      modelName: 'Modality',
      timestamps: false
    }
  }
}

module.exports = { ModalitySchema, MODALITY_TABLE, Modality }
