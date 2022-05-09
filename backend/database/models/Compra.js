const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Compra extends Model {}
Compra.init(
  {
    idCompra: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    legajo: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    idProveedor: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    fechaAlta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fechaBaja: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Compras", timestamps: false }
);

module.exports = Compra;
