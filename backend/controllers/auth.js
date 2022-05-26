const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Auth = require("../database/models/Auth.js");
const { Op } = require("sequelize");

const AuthController = {
  Login: async (req, res) => {
    const { body } = req;
    try {
      const auth = await Auth.findOne({ where: { legajo: body.legajo, idEstado: { [Op.eq]: 1 } } });
      if (!auth) {
        return res.status(403).send("Usuario y/o contraseña invalido");
      } else {
        const isMatch = await bcrypt.compare(body.pass, auth.pass);
        if (isMatch) {
          const signed = jwt.sign({ legajo: auth.legajo }, process.env.SECRET);
          return res.status(200).send({token:signed,user:auth.legajo});
        } else {
          return res.status(403).send("Usuario y/o contraseña invalido");
        }
      }
    } catch (e) {
      res
        .status(500)
        .send(`Se produjo un error al intentar loguearse en el sistema. \nError: ${e.message}`);
    }
  },
  Logout: async (req, res) => {
    const { body } = req;
    try {
      const auth = await Auth.findOne({ where: { legajo: body.legajo, idEstado: { [Op.eq]: 1 } } });
      if (!auth) {
        return res.status(403).send("Usuario y/o contraseña invalido");
      } else {
        const isMatch = await bcrypt.compare(body.pass, auth.pass);
        if (isMatch) {
          const signed = jwt.sign({ legajo: auth.legajo }, process.env.SECRET);
          return res.status(200).send(signed);
        } else {
          return res.status(403).send("Usuario y/o contraseña invalido");
        }
      }
    } catch (e) {
      res
        .status(500)
        .send(`Se produjo un error al intentar loguearse en el sistema. \nError: ${e.message}`);
    }
  },
};

module.exports = AuthController;
