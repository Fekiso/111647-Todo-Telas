const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class DetalleCompra extends Model {}
DetalleCompra.init(
  {
    idDetalleCompra: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idCompra: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    idProductoStock: {
      type: DataTypes.TINYINT,
      allowNull: false,
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
  },
  { sequelize, modelName: "DetallesCompras", timestamps: false }
);

module.exports = DetalleCompra;
