const compraController = require("../controllers/compras.js");
const express = require("express");
const router = express.Router();

router.get("/", compraController.getAll);
router.get("/:id", compraController.getOne);
router.post("/", compraController.post);
router.put("/:id",compraController.update);
router.delete("/:id", compraController.delete);

module.exports = router;
