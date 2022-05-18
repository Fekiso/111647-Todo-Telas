const { Producto } = require("../database/associations.js");
const Stock = require("../database/models/Stock.js");

const stockController = {
  getAll: async (req, res) => {
    await Stock.findAll({ include: { model: Producto } })
      .then((stock) => {
        res.json(stock);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar los tipos de documento. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await Stock.findByPk(req.params.id)
      .then((stock) => {
        res.json(stock);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar los datos del documento ${req.params.id}. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    await Stock.create({
      idLocal: req.body.idLocal,
      idProducto: req.body.idProducto,
      largo: req.body.largo,
    })
      .then((stock) => {
        res.send(stock);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta un nuevo tipo de documento. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await Stock.update(
      {
        idLocal: req.body.idLocal,
        idProducto: req.body.idProducto,
        largo: req.body.largo,
      },
      {
        where: {
          idProductoStock: req.params.id,
        },
      }
    )
      .then((stock) => {
        res.send(stock);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del tipo de documento seleccionado. \nError: ${e}`
        )
      );
  },

  // delete: async (req, res) => {
  //   await Stock.update(
  //     {
  //       habilitado: false,
  //     },
  //     {
  //       where: {
  //         idProductoStock: req.params.id,
  //       },
  //     }
  //   )
  //     .then((stock) => {
  //       res.send(stock);
  //     })
  //     .catch((e) =>
  //       res.send(
  //         `Se produjo un error al intentar dar de baja el tipo de documento seleccionado. \nError: ${e}`
  //       )
  //     );
  // },
};

module.exports = stockController;
