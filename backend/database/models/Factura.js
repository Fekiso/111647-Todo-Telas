const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Factura extends Model {}
Factura.init(
  {
    idFactura: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    idPersona: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    legajo: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    idDescuento: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Facturas", timestamps: false }
);

module.exports = Factura;
