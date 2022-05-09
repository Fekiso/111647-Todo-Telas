const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Descuento extends Model {}
Descuento.init(
  {
    idDescuento: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    descuento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    importe: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { sequelize, modelName: "Descuentos", timestamps: false }
);

module.exports = Descuento;
