const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Stock extends Model {}
Stock.init(
  {
    idProductoStock: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    largo: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    idLocal: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Stocks", timestamps: false }
);

module.exports = Stock;
