const EstadosEmpleado = require("../database/models/EstadoEmpleado.js");

const estadosEmpleadoController = {
  getAll: async (req, res) => {
    await EstadosEmpleado.findAll()
      .then((estadoEmpleados) => {
        res.json(estadoEmpleados);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar los estados de empleado. \nError: ${e}`)
      );
  },

  getOne: async (req, res) => {
    await EstadosEmpleado.findByPk(req.params.id)
      .then((estadoEmpleados) => {
        res.json(estadoEmpleados);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar los datos del estado de empleado. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    await EstadosEmpleado.create({
      estado: req.body.estado,
      descripcion: req.body.descripcion,
    })
      .then((estadoEmpleados) => {
        res.send(estadoEmpleados);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta un nuevo estado de empleado. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await EstadosEmpleado.update(
      {
        estado: req.body.estado,
        descripcion: req.body.descripcion,
      },
      {
        where: {
          idEstado: req.params.id,
        },
      }
    )
      .then((estadoEmpleados) => {
        res.send(estadoEmpleados);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del estado de empleado seleccionado. \nError: ${e}`
        )
      );
  },
};

module.exports = estadosEmpleadoController;
