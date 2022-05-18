const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class DetalleFactura extends Model {}
DetalleFactura.init(
  {
    idDetalleFactura: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombreProducto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    largo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    precioXMts: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    idProductoStock: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    idFactura: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  { sequelize, modelName: "DetallesFacturas", timestamps: false }
);

module.exports = DetalleFactura;
