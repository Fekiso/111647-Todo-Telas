const detalleFacturaController = require("../controllers/detallesFacturas.js");
const express = require("express");
const router = express.Router();

router.get("/", detalleFacturaController.getAll);
router.get("/:id", detalleFacturaController.getOne);
router.post("/", detalleFacturaController.post);
router.put("/:id",detalleFacturaController.update);
router.delete("/:id", detalleFacturaController.delete);

module.exports = router;
