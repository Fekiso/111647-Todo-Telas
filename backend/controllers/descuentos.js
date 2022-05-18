const Descuento = require("../database/models/Descuento.js");

const tipoDocController = {
  getAll: async (req, res) => {
    await Descuento.findAll({ where: { habilitado: 1 } })
      .then((descuento) => {
        res.json(descuento);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar los descuentos. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await Descuento.findByPk(req.params.id)
      .then((descuento) => {
        res.json(descuento);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar los datos del descuento ${req.params.id}. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    await Descuento.create({
      descuento: req.body.descuento,
      importe: req.body.importe,
      descripcion: req.body.descripcion,
      habilitado: true,
    })
      .then((descuento) => {
        res.send(descuento);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar dar de alta un nuevo descuento. \nError: ${e}`)
      );
  },

  update: async (req, res) => {
    await Descuento.update(
      {
        descuento: req.body.descuento,
        importe: req.body.importe,
        descripcion: req.body.descripcion,
      },
      {
        where: {
          idDescuento: req.params.id,
        },
      }
    )
      .then((descuento) => {
        res.send(descuento);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del descuento seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await Descuento.update(
      {
        habilitado: false,
      },
      {
        where: {
          idDescuento: req.params.id,
        },
      }
    )
      .then((descuento) => {
        res.send(descuento);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja el descuento seleccionado. \nError: ${e}`
        )
      );
  },
};

module.exports = tipoDocController;
