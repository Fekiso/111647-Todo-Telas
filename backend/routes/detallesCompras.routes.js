const detalleCompraController = require("../controllers/detallesCompras.js");
const express = require("express");
const router = express.Router();

router.get("/", detalleCompraController.getAll);
router.get("/:id", detalleCompraController.getOne);
router.post("/", detalleCompraController.post);
router.put("/:id",detalleCompraController.update);
router.delete("/:id", detalleCompraController.delete);

module.exports = router;
