const estadosEmpleadoController = require('../controllers/estadosEmpleados.js')
const express = require("express");
const router = express.Router();

router.get("/", estadosEmpleadoController.getAll);
router.get("/:id", estadosEmpleadoController.getOne);
router.post("/", estadosEmpleadoController.post);
router.put("/:id", estadosEmpleadoController.update);

module.exports = router;
