const TipoDoc = require("../database/models/TipoDoc.js");

const tipoDocController = {
  getAll: async (req, res) => {
    await TipoDoc.findAll()
      .then((tiposDoc) => {
        res.json(tiposDoc);
      })
      .catch((e) =>
        res.send(`Se produjo un error al intentar consultar los tipos de documento. \nError: ${e}`)
      );
  },
  
  getOne: async (req, res) => {
    await TipoDoc.findByPk(req.params.id)
      .then((tiposDoc) => {
        res.json(tiposDoc);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar consultar los datos del documento ${req.params.id}. \nError: ${e}`
        )
      );
  },

  post: async (req, res) => {
    await TipoDoc.create({
      tipoDoc: req.body.tipoDoc,
      descripcion: req.body.descripcion,
      habilitado: true,
    })
      .then((tiposDoc) => {
        res.send(tiposDoc);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de alta un nuevo tipo de documento. \nError: ${e}`
        )
      );
  },

  update: async (req, res) => {
    await TipoDoc.update(
      {
        tipoDoc: req.body.tipoDoc,
        descripcion: req.body.descripcion,
      },
      {
        where: {
          idTipoDoc: req.params.id,
        },
      }
    )
      .then((tiposDoc) => {
        res.send(tiposDoc);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar actualizar los datos del tipo de documento seleccionado. \nError: ${e}`
        )
      );
  },

  delete: async (req, res) => {
    await TipoDoc.update(
      {
        habilitado: false,
      },
      {
        where: {
          idTipoDoc: req.params.id,
        },
      }
    )
      .then((tiposDoc) => {
        res.send(tiposDoc);
      })
      .catch((e) =>
        res.send(
          `Se produjo un error al intentar dar de baja el tipo de documento seleccionado. \nError: ${e}`
        )
      );
  },
};

module.exports = tipoDocController;
