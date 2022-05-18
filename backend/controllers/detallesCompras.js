const { Stock, Compra } = require("../database/associations.js");
const DetalleCompra = require("../database/models/DetalleCompra.js");

const DetallesCompraController = {
  getAll: async (req, res) => {
    await DetalleCompra.findAll({ include: [Stock, Compra] })
      .then((detalleCompra) => {
        res.json(detalleCompra);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar el registro de compras. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await DetalleCompra.findByPk(req.params.id)
      .then((detalleCompra) => {
        res.json(detalleCompra);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar datos del detalle de la compra seleccionado. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    DetalleCompra.create({
      idCompra: req.body.idCompra,
      idProductoStock: req.body.idProductoStock,
      nombreProducto: req.body.nombreProducto,
      largo: req.body.largo,
      precioXMts: req.body.precioXMts,
      habilitado: true,
    })
      .then((detalleCompra) => {
        res.send(detalleCompra);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta a un detalle de compra en el sistema. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await DetalleCompra.update(
      {
        idCompra: req.body.idCompra,
        idProductoStock: req.body.idProductoStock,
        nombreProducto: req.body.nombreProducto,
        largo: req.body.largo,
        precioXMts: req.body.precioXMts,
      },
      {
        where: {
          idDetalleCompra: req.params.id,
        },
      }
    )
      .then((detalleCompra) => {
        res.send(detalleCompra);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del detalle de la compra seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await DetalleCompra.update(
      {
        habilitado: false,
      },
      {
        where: {
          idDetalleCompra: req.params.id,
        },
      }
    )
      .then((detalleCompra) => {
        res.send(detalleCompra);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja al detalle de la compra seleccionado. \nError: ${e}`
        )
      );
  },
};

module.exports = DetallesCompraController;
