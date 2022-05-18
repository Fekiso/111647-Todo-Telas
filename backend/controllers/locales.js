const Local = require("../database/models/local.js");

const localesController = {
  getAll: async (req, res) => {
    await Local.findAll({ where: { habilitado: 1 } })
      .then((local) => {
        res.json(local);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar los locales. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await Local.findByPk(req.params.id)
      .then((local) => {
        res.json(local);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar los datos del local. \nError: ${e}`)
      );
  },

  post: async (req, res) => {
    await Local.create({
      local: req.body.local,
      descripcion: req.body.descripcion,
    })
      .then((local) => {
        res.send(local);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar dar de alta un nuevo local. \nError: ${e}`)
      );
  },

  update: async (req, res) => {
    await Local.update(
      {
        local: req.body.local,
        descripcion: req.body.descripcion,
      },
      {
        where: {
          idLocal: req.params.id,
        },
      }
    )
      .then((local) => {
        res.send(local);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del local seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await Local.update(
      {
        habilitado: false,
      },
      {
        where: {
          idLocal: req.params.id,
        },
      }
    )
      .then((local) => {
        res.send(local);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar dar de baja al local seleccionado. \nError: ${e}`)
      );
  },
};

module.exports = localesController;
