const Rol = require("../database/models/Rol.js");

const rolController = {
  getAll: async (req, res) => {
    await Rol.findAll({where:{habilitado: 1}})
      .then((rol) => {
        res.json(rol);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar los roles. \nError: ${e}`)
      );
  },
  
  getOne: async (req, res) => {
    await Rol.findByPk(req.params.id)
      .then((rol) => {
        res.json(rol);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar los datos del rol ${req.params.id}. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    await Rol.create({
      rol: req.body.rol,
      descripcion: req.body.descripcion,
      habilitado: true,
    })
      .then((rol) => {
        res.send(rol);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar dar de alta un nuevo rol. \nError: ${e}`)
      );
  },

  update: async (req, res) => {
    await Rol.update(
      {
        rol: req.body.rol,
        descripcion: req.body.descripcion,
      },
      {
        where: {
          idRol: req.params.id,
        },
      }
    )
      .then((tiporolDoc) => {
        res.send(rol);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del rol seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await Rol.update(
      {
        habilitado: false,
      },
      {
        where: {
          idRol: req.params.id,
        },
      }
    )
      .then((rol) => {
        res.send(rol);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar dar de baja el rol seleccionado. \nError: ${e}`)
      );
  },
};

module.exports = rolController;
