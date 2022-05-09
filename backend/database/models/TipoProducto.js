const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class TipoProducto extends Model {}
TipoProducto.init(
  {
    idTipoProd: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tipoProd: {
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
  { sequelize, modelName: "TiposProductos", timestamps: false }
);

module.exports = TipoProducto;
