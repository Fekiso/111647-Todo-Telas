const { Proveedor, Usuario } = require('../database/associations.js');
const Compra = require('../database/models/Compra.js')

const CompraController = {
  getAll: async (req, res) => {
    await Compra.findAll({ include: [[Proveedor,"Proveedor"], [Usuario,"Usuario"]],where:{habilitado: 1} })
      .then((compra) => {
        compra? res.json(compra):res.status(404).json({msg:`No se encontraron compras registradas`});
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar el registro de compras. \nError: ${e}`)
      );
  },
  
  getOne: async (req, res) => {
    await Compra.findByPk(req.params.id)
      .then((compra) => {
        res.json(compra);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar datos de la compra seleccionads. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    Compra.create({
      legajo: req.body.legajo,
      idProveedor: req.body.idProveedor,
      fechaAlta: new Date(),
      habilitado: true,
    })
      .then((compra) => {
        res.send(compra);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta una nueva compra en el sistema. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await Compra.update(
      {
        legajo: req.body.legajo,
        idProveedor: req.body.idProveedor,
        fechaAlta: new Date(),
      },
      {
        where: {
          idCompra: req.params.id,
        },
      }
    )
      .then((compra) => {
        res.send(compra);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos de la compra seleccionada. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await Compra.update(
      {
        fechaBaja: new Date(),
        habilitado: false,
      },
      {
        where: {
          idCompra: req.params.id,
        },
      }
    )
      .then((compra) => {
        res.send(compra);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja la compra seleccionada. \nError: ${e}`
        )
      );
  },
};

module.exports = CompraController;