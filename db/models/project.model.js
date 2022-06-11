const { Model, DataTypes, Sequelize } = require('sequelize')

const PROJECT_TABLE = 'projects'

const ProjectSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(30)
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Project extends Model {
  static associate (models) {
    this.hasMany(models.Lot, {
      as: 'lots',
      foreignKey: 'projectId'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: PROJECT_TABLE,
      modelName: 'Project',
      timestamps: false
    }
  }
}

module.exports = { ProjectSchema, PROJECT_TABLE, Project }
