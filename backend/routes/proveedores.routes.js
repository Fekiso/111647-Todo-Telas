const proveedorController = require("../controllers/proveedores.js");
const express = require("express");
const router = express.Router();

router.get("/", proveedorController.getAll);
router.get("/:id", proveedorController.getOne);
router.post("/", proveedorController.post);
router.put("/:id",proveedorController.update);
router.delete("/:id", proveedorController.delete);

module.exports = router;
