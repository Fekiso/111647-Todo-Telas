const { TipoDoc } = require('../database/associations.js');
const Persona = require('../database/models/Persona.js')

const PersonaController = {
  getAll: async (req, res) => {
    await Persona.findAll({
      include:{
        model:TipoDoc
      }
      //,where:{habilitado: 1}
    })
      .then((persona) => {
        res.json(persona);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar el registro de personas. \nError: ${e}`)
      );
  },
  
  getOne: async (req, res) => {
    await Persona.findByPk(req.params.id)
      .then((persona) => {
        res.json(persona);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar datos de la persona seleccionada. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    Persona.create({
      idTipoDoc: req.body.idTipoDoc,
      nroDocumento: req.body.nroDocumento,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      habilitado: true,
    })
      .then((persona) => {
        res.send(persona);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta una nueva persona en el sistema. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await Persona.update(
      {
        idTipoDoc: req.body.idTipoDoc,
        nroDocumento: req.body.nroDocumento,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
      },
      {
        where: {
          idPersona: req.params.id,
        },
      }
    )
      .then((persona) => {
        res.send(persona);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos de la persona seleccionada. \nError: ${e}`
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
          idPersona: req.params.id,
        },
      }
    )
      .then((persona) => {
        res.send(persona);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja a la persona seleccionada. \nError: ${e}`
        )
      );
  },
};

module.exports = PersonaController;