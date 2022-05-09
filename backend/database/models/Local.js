const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Local extends Model {}
Local.init(
  {
    idLocal: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    local: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true
    },
  },
  { sequelize, modelName: "Locales", timestamps: false }
);

module.exports = Local;
