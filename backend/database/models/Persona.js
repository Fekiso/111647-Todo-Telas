const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Persona extends Model {}
Persona.init(
  {
    idPersona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    idTipoDoc: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    nroDocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    habilitado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize, modelName: "persona", timestamps: false }
);

module.exports = Persona;
