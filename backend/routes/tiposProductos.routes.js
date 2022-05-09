const tipoProductoController = require('../controllers/tiposProductos.js')
const express = require("express");
const router = express.Router();

router.get("/", tipoProductoController.getAll);
router.get("/:id", tipoProductoController.getOne);
router.post("/", tipoProductoController.post);
router.put("/:id", tipoProductoController.update);
router.delete("/:id", tipoProductoController.delete);

module.exports = router;
