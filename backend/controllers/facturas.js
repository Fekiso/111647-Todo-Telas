const { Persona, Usuario, Descuento } = require("../database/associations.js");
const Factura = require("../database/models/Factura.js");

const FacturaController = {
  getAll: async (req, res) => {
    await Factura.findAll({ include: [Persona, Usuario, Descuento], where: { habilitado: 1 } })
      .then((factura) => {
        res.json(factura);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar el registro de facturas. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await Factura.findByPk(req.params.id)
      .then((factura) => {
        res.json(factura);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar datos de la factura seleccionads. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    Factura.create({
      legajo: req.body.legajo,
      idPersona: req.body.idPersona,
      fechaAlta: new Date(),
      habilitado: true,
    })
      .then((factura) => {
        res.send(factura);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta una nueva factura en el sistema. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await Factura.update(
      {
        legajo: req.body.legajo,
        idPersona: req.body.idPersona,
        fechaAlta: new Date(),
      },
      {
        where: {
          idFactura: req.params.id,
        },
      }
    )
      .then((factura) => {
        res.send(factura);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos de la factura seleccionada. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await Factura.update(
      {
        fechaBaja: new Date(),
        habilitado: false,
      },
      {
        where: {
          idFactura: req.params.id,
        },
      }
    )
      .then((factura) => {
        res.send(factura);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja la factura seleccionada. \nError: ${e}`
        )
      );
  },
};

module.exports = FacturaController;
