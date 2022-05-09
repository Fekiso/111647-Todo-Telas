const personaController = require("../controllers/personas.js");
const express = require("express");
const router = express.Router();

router.get("/", personaController.getAll);
router.get("/:id", personaController.getOne);
router.post("/", personaController.post);
router.put("/:id",personaController.update);
router.delete("/:id", personaController.delete);

module.exports = router;
