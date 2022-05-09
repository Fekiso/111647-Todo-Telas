const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Rol extends Model {}
Rol.init(
  {
    idRol: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    rol: {
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
    },
  },
  { sequelize, modelName: "Roles", timestamps: false }
);

module.exports = Rol;
