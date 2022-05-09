const Proveedor = require('../database/models/Proveedor.js')

const ProveedorController = {
  getAll: async (req, res) => {
    await Proveedor.findAll()
      .then((proveedor) => {
        res.json(proveedor);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar el registro de proveedores. \nError: ${e}`)
      );
  },
  
  getOne: async (req, res) => {
    await Proveedor.findByPk(req.params.id)
      .then((proveedor) => {
        res.json(proveedor);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar datos del proveedor seleccionada. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    Proveedor.create({
      denominacion: req.body.denominacion,
      descripcion: req.body.descripcion,
      correo: req.body.correo,
      telefono: req.body.telefono,
      fechaAlta: new Date(),
      habilitado: true,
    })
      .then((proveedor) => {
        res.send(proveedor);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta un nuevo proveedor en el sistema. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await Proveedor.update(
      {
        denominacion: req.body.denominacion,
        descripcion: req.body.descripcion,
        correo: req.body.correo,
        telefono: req.body.telefono,
      },
      {
        where: {
          idProveedor: req.params.id,
        },
      }
    )
      .then((proveedor) => {
        res.send(proveedor);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del proveedor seleccionada. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await Proveedor.update(
      {
        fechaBaja: new Date(),
        habilitado: false,
      },
      {
        where: {
          idProveedor: req.params.id,
        },
      }
    )
      .then((proveedor) => {
        res.send(proveedor);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja al proveedor seleccionada. \nError: ${e}`
        )
      );
  },
};

module.exports = ProveedorController;