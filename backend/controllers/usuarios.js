const Usuario = require('../database/models/Usuario.js')

const ProveedorController = {
  getAll: async (req, res) => {
    await Usuario.findAll()
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
    Usuario.create({
      idPersona: req.body.idPersona,
      pass: req.body.pass,
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
    await Usuario.update(
      {
        idPersona: req.body.idPersona,
        pass: req.body.pass,
        idLocal: req.body.idLocal,
        idRol: req.body.idRol,
        idEstado: req.body.idEstado,
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