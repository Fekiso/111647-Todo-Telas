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

Persona.belongsTo(TipoDoc, { foreignKey: "idTipoDoc" });
TipoDoc.hasMany(Persona, { foreignKey: "idTipoDoc" });

Usuario.belongsTo(Persona, { foreignKey: "idPersona" });
Persona.hasOne(Usuario, { foreignKey: "idPersona" });
Usuario.belongsTo(Rol, { foreignKey: "idRol" });
Rol.hasMany(Usuario, { foreignKey: "idRol" });
Usuario.belongsTo(EstadoEmpleado, { foreignKey: "idEstado" });
EstadoEmpleado.hasMany(Usuario, { foreignKey: "idEstado" });
Usuario.belongsTo(Local, { foreignKey: "idLocal" });
Local.hasMany(Usuario, { foreignKey: "idLocal" });

Factura.belongsTo(Usuario, { foreignKey: "legajo" });
Usuario.hasMany(Factura, { foreignKey: "legajo" });
Factura.belongsTo(Descuento, { foreignKey: "idDescuento" });
Descuento.hasMany(Factura, { foreignKey: "idDescuento" });
Factura.belongsTo(Persona, { foreignKey: "idPersona" });
Persona.hasMany(Factura, { foreignKey: "idPersona" });

Compra.belongsTo(Usuario, { foreignKey: "legajo" });;
Usuario.hasMany(Compra, { foreignKey: "legajo" });
Compra.belongsTo(Proveedor, { foreignKey: "idProveedor" })
Proveedor.hasMany(Compra, { foreignKey: "idProveedor" });

Producto.belongsTo(TipoProducto, { foreignKey: "idTipoProd" });
TipoProducto.hasMany(Producto, { foreignKey: "idTipoProd" });

Stock.belongsTo(Producto, { foreignKey: "idProducto" });
Producto.hasMany(Stock, { foreignKey: "idProducto" });

DetalleCompra.belongsTo(Stock, { foreignKey: "idProductoStock" });
Stock.hasMany(DetalleCompra, { foreignKey: "idProductoStock" });
DetalleCompra.belongsTo(Compra, { foreignKey: "idCompra" });
Compra.hasMany(DetalleCompra, { foreignKey: "idCompra" });

DetalleCompra.belongsTo(Stock, { foreignKey: "idProductoStock" });
Stock.hasMany(DetalleCompra, { foreignKey: "idProductoStock" });
DetalleCompra.belongsTo(Factura, { foreignKey: "idFactura" });
Factura.hasMany(DetalleCompra, { foreignKey: "idFactura" });

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
