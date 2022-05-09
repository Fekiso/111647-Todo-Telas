const descuentoController = require('../controllers/descuentos.js')
const express = require("express");
const router = express.Router();

router.get("/", descuentoController.getAll);
router.get("/:id", descuentoController.getOne);
router.post("/", descuentoController.post);
router.put("/:id", descuentoController.update);
router.delete("/:id", descuentoController.delete);

module.exports = router;
