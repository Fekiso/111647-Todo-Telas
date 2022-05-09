const tipoDocController = require('../controllers/tiposDocs.js')
const express = require("express");
const router = express.Router();

router.get("/", tipoDocController.getAll);
router.get("/:id", tipoDocController.getOne);
router.post("/", tipoDocController.post);
router.put("/:id", tipoDocController.update);
router.delete("/:id", tipoDocController.delete);

module.exports = router;
