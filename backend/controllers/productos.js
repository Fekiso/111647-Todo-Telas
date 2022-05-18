const { TipoProducto } = require("../database/associations.js");
const Persona = require("../database/models/Producto.js");

const ProductoController = {
  getAll: async (req, res) => {
    await Persona.findAll({ include: { model: TipoProducto }, where: { habilitado: 1 } })
      .then((producto) => {
        res.json(producto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar el registro de productos. \nError: ${e}`
        )
      );
  },

  getOne: async (req, res) => {
    await Persona.findByPk(req.params.id)
      .then((producto) => {
        res.json(producto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar datos del producto seleccionado. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    Persona.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      ancho: req.body.ancho,
      alto: req.body.alto,
      precioXMts: req.body.precioXMts,
      idTipoProd: req.body.idTipoProd,
      habilitado: true,
    })
      .then((producto) => {
        res.send(producto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta un nuevo producto en el sistema. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await Persona.update(
      {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        ancho: req.body.ancho,
        alto: req.body.alto,
        precioXMts: req.body.precioXMts,
        idTipoProd: req.body.idTipoProd,
      },
      {
        where: {
          idProducto: req.params.id,
        },
      }
    )
      .then((producto) => {
        res.send(producto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del producto seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await Persona.update(
      {
        habilitado: false,
      },
      {
        where: {
          idProducto: req.params.id,
        },
      }
    )
      .then((producto) => {
        res.send(producto);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja al producto seleccionado. \nError: ${e}`
        )
      );
  },
};

module.exports = ProductoController;
