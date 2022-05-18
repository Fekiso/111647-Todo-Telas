const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Usuario extends Model {}
Usuario.init(
  {
    legajo: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    pass: {
      type: DataTypes.STRING,
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
    idPersona: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idRol: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    idEstado: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    idLocal: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  { sequelize, modelName: "Usuarios", timestamps: false }
);

module.exports = Usuario;
