const express = require("express");
const { expressjwt } = require("express-jwt");
const cors = require("cors");
const Usuario = require("./database/models/Usuario.js");
const app = express();

const sequelize = require("./database/db.js");

const PORT = 3080;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const validateJwt = expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] });
const findAndAssignUser = async (req, res, next) => {
  try {
    const user = await Usuario.findByPk(req.auth.legajo);
    if (!user) return res.status(401).end();
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};
const isAutenticated = express.Router().use(validateJwt, findAndAssignUser);

//Rutas
app.use("/api/", require("./routes/auth.routes.js"));
app.use("/api/", isAutenticated, require("./routes/index.routes.js"));

app.listen(PORT, function () {
  console.log(`La app arranco en http://localhost:${PORT}`);
  //Conexion a la base de datos
  sequelize
    .authenticate()
    .then(() => {
      console.log("Base de datos online");
    })
    .catch((error) => {
      console.log(`Se ha producido un error al conectarse a la base de datos. \nError: ${error}`);
    });
});
