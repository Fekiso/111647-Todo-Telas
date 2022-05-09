const express = require("express");
const sequelize = require("./database/db.js");
const app = express();
require("./database/associations.js");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
//Tablas auxiliares
app.use("/api/TiposDocs", require("./routes/tiposDocs.routes.js"));
app.use("/api/EstadosEmpleados", require("./routes/estadosEmpleados.routes.js"));
app.use("/api/Roles", require("./routes/roles.routes.js"));
app.use("/api/Locales", require("./routes/locales.routes.js"));
app.use("/api/TiposProductos", require("./routes/tiposProductos.routes.js"));
app.use("/api/Descuentos", require("./routes/descuentos.routes.js"));

//Tablas primarias
app.use("/api/Proveedores", require("./routes/proveedores.routes.js"));
app.use("/api/Productos", require("./routes/productos.routes.js"));
app.use("/api/Personas", require("./routes/personas.routes.js"));
app.use("/api/Usuarios", require("./routes/usuarios.routes.js"));

//Tablas de movimiento
app.use("/api/Stocks", require("./routes/stocks.routes.js"));
app.use("/api/Compras", require("./routes/compras.routes.js"));
app.use("/api/Facturas", require("./routes/facturas.routes.js"));
app.use("/api/DetallesCompras", require("./routes/detallesCompras.routes.js"));
app.use("/api/DetallesFacturas", require("./routes/detallesFacturas.routes.js"));

app.listen(PORT, function () {
  console.log(`La app arranco en http://localhost:${PORT}`);
  //Coneccion a la base de datos
  sequelize
    .authenticate()
    .then(() => {
      console.log("Nos hemos conectado a la base de datos");
    })
    .catch((error) => {
      console.log(`Se ha producido un error al conectarse a la base de datos. \nError: ${error}`);
    });
});
