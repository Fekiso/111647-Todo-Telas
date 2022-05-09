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
    idPersona: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    idLocal: {
      type: DataTypes.TINYINT,
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
  },
  { sequelize, modelName: "Usuarios", timestamps: false }
);

module.exports = Usuario;
