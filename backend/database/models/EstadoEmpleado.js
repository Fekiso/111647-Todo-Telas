const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class EstadoEmpleado extends Model {}
EstadoEmpleado.init(
  {
    idEstado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: "EstadosEmpleados", timestamps: false }
);

module.exports = EstadoEmpleado;
