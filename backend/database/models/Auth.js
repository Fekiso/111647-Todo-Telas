const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db.js");

class Auth extends Model {}
Auth.init(
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
  },
  { sequelize, modelName: "Usuarios", timestamps: false }
);

module.exports = Auth;
