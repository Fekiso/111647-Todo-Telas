const express = require("express");
const app = express();

app.use("/TiposDocs", require("./tiposDocs.routes.js"));
app.use("/EstadosEmpleados", require("./estadosEmpleados.routes.js"));
app.use("/Roles", require("./roles.routes.js"));
app.use("/Locales", require("./locales.routes.js"));
app.use("/TiposProductos", require("./tiposProductos.routes.js"));
app.use("/Descuentos", require("./descuentos.routes.js"));
app.use("/Proveedores", require("./proveedores.routes.js"));
app.use("/Productos", require("./productos.routes.js"));
app.use("/Personas", require("./personas.routes.js"));
app.use("/Usuarios", require("./usuarios.routes.js"));
app.use("/Stocks", require("./stocks.routes.js"));
app.use("/Compras", require("./compras.routes.js"));
app.use("/Facturas", require("./facturas.routes.js"));
app.use("/DetallesCompras", require("./detallesCompras.routes.js"));
app.use("/DetallesFacturas", require("./detallesFacturas.routes.js"));

module.exports = app;
