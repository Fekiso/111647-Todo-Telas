const TipoDoc = require("./models/TipoDoc.js");
const Persona = require("./models/Persona.js");
const TipoProducto = require("./models/TipoProducto.js");
const Producto = require("./models/Producto.js");
const Proveedor = require("./models/Proveedor.js");
const Local = require("./models/Local.js");
const Stock = require("./models/Stock.js");
const EstadoEmpleado = require("./models/EstadoEmpleado.js");
const Rol = require("./models/Rol.js");
const Usuario = require("./models/Usuario.js");
const Descuento = require("./models/Descuento.js");
const Compra = require("./models/Compra.js");
const DetalleCompra = require("./models/DetalleCompra.js");
const Factura = require("./models/Factura.js");
const DetalleFactura = require("./models/DetalleFactura.js");

module.exports = {
  TipoDoc,
  Persona,
  TipoProducto,
  Producto,
  Stock,
  Proveedor,
  Descuento,
  EstadoEmpleado,
  Rol,
  Local,
  Usuario,
  Compra,
  DetalleCompra,
  Factura,
  DetalleFactura,
};
