const DetalleFactura = require("../database/models/DetalleFactura.js");

const CompraController = {
  getAll: async (req, res) => {
    await DetalleFactura.findAll()
      .then((detalleFactura) => {
        res.json(detalleFactura);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar el registro de facturas. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await DetalleFactura.findByPk(req.params.id)
      .then((detalleFactura) => {
        res.json(detalleFactura);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar datos del detalle de la factura seleccionado. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    DetalleFactura.create({
      idFactura: req.body.idFactura,
      idProductoStock: req.body.idProductoStock,
      nombreProducto: req.body.nombreProducto,
      largo: req.body.largo,
      precioXMts: req.body.precioXMts,
      habilitado: true,
    })
      .then((detalleFactura) => {
        res.send(detalleFactura);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta a un detalle de factura en el sistema. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await DetalleFactura.update(
      {
        idFactura: req.body.idFactura,
        idProductoStock: req.body.idProductoStock,
        nombreProducto: req.body.nombreProducto,
        largo: req.body.largo,
        precioXMts: req.body.precioXMts,
      },
      {
        where: {
          idDetalleFactura: req.params.id,
        },
      }
    )
      .then((detalleFactura) => {
        res.send(detalleFactura);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del detalle de la factura seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await DetalleFactura.update(
      {
        habilitado: false,
      },
      {
        where: {
          idDetalleFactura: req.params.id,
        },
      }
    )
      .then((detalleFactura) => {
        res.send(detalleFactura);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja al detalle de la factura seleccionado. \nError: ${e}`
        )
      );
  },
};

module.exports = CompraController;
