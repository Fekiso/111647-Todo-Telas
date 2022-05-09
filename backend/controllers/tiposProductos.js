const TipoProducto = require("../database/models/TipoProducto.js");

const tiposProductosController = {
  getAll: async (req, res) => {
    await TipoProducto.findAll()
      .then((tipoProducto) => {
        res.json(tipoProducto);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar los tipos de productos. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await TipoProducto.findByPk(req.params.id)
      .then((tipoProducto) => {
        res.json(tipoProducto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar los datos del tipo de producto. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    await TipoProducto.create({
      tipoProd: req.body.tipoProd,
      descripcion: req.body.descripcion,
    })
      .then((tipoProducto) => {
        res.send(tipoProducto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta un nuevo tipo de producto. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await TipoProducto.update(
      {
        tipoProd: req.body.tipoProd,
        descripcion: req.body.descripcion,
      },
      {
        where: {
              idTipoProd: req.params.id,
        },
      }
    )
      .then((tipoProducto) => {
        res.send(tipoProducto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del tipo de producto seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await TipoProducto.update(
      {
        habilitado: false,
      },
      {
        where: {
          idTipoProd: req.params.id,
        },
      }
    )
      .then((tipoProducto) => {
        res.send(tipoProducto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja al tipo de producto seleccionado. \nError: ${e}`
        )
      );
  },
};

module.exports = tiposProductosController;
