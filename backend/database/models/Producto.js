const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Producto extends Model {}
Producto.init(
  {
    idProducto: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ancho: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    alto: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    precioXMts: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    idTipoProd: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Productos", timestamps: false }
);

module.exports = Producto;
