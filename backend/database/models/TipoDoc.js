const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class TipoDoc extends Model {}
TipoDoc.init(
  {
    idTipoDoc: {
      type: DataTypes.TINYINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tipoDoc: {
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
    },
  },
  { sequelize, modelName: "TiposDocs", timestamps: false }
);

module.exports = TipoDoc;
