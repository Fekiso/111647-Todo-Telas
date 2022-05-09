const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Proveedor extends Model {}
Proveedor.init(
  {
    idProveedor: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    denominacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.BIGINT,
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
  { sequelize, modelName: "Proveedores", timestamps: false }
);

module.exports = Proveedor;
