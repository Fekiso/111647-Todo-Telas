const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const { Persona, Rol, EstadoEmpleado, Local } = require("../database/associations.js");
const Usuario = require("../database/models/Usuario.js");

const ProveedorController = {
  getAll: async (req, res) => {
    await Usuario.findAll({
      include: [Persona, Rol, EstadoEmpleado, Local],
      where: { idEstado: { [Op.ne]: [4] } },
    })
      .then((usuario) => {
        res.json(usuario);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar el registro de usuarios. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await Usuario.findByPk(req.params.id)
      .then((usuario) => {
        res.json(usuario);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar datos del usuario seleccionado. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.pass, salt);
    Usuario.create({
      idPersona: req.body.idPersona,
      pass: hashed,
      fechaAlta: new Date(),
      idLocal: req.body.idLocal,
      idRol: req.body.idRol,
      idEstado: 1,
    })
      .then((usuario) => {
        res.send(usuario);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta un nuevo usuario en el sistema. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.pass, salt);
    await Usuario.update(
      {
        idPersona: req.body.idPersona,
        pass: hashed,
        idLocal: req.body.idLocal,
        idRol: req.body.idRol,
        idEstado: req.body.idEstado,
      },
      {
        where: {
          legajo: req.params.legajo,
        },
      }
    )
      .then((usuario) => {
        res.send(usuario);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del usuario seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await Usuario.update(
      {
        fechaBaja: new Date(),
        idEstado: 4,
      },
      {
        where: {
          legajo: req.params.id,
        },
      }
    )
      .then((usuario) => {
        res.send(usuario);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja al usuario seleccionado. \nError: ${e}`
        )
      );
  },
};

module.exports = ProveedorController;
