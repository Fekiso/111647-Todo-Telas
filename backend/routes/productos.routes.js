const productoController = require("../controllers/productos.js");
const express = require("express");
const router = express.Router();

router.get("/", productoController.getAll);
router.get("/:id", productoController.getOne);
router.post("/", productoController.post);
router.put("/:id",productoController.update);
router.delete("/:id", productoController.delete);

module.exports = router;
