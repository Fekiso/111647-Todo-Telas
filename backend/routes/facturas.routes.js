const facturaController = require("../controllers/facturas.js");
const express = require("express");
const router = express.Router();

router.get("/", facturaController.getAll);
router.get("/:id", facturaController.getOne);
router.post("/", facturaController.post);
router.put("/:id",facturaController.update);
router.delete("/:id", facturaController.delete);

module.exports = router;
