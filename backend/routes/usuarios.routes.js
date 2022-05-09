const usuarioController = require("../controllers/usuarios.js");
const express = require("express");
const router = express.Router();

router.get("/", usuarioController.getAll);
router.get("/:id", usuarioController.getOne);
router.post("/", usuarioController.post);
router.put("/:id",usuarioController.update);
router.delete("/:id", usuarioController.delete);

module.exports = router;
