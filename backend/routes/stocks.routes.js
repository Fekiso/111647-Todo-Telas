const stockController = require('../controllers/stocks.js')
const express = require("express");
const router = express.Router();

router.get("/", stockController.getAll);
router.get("/:id", stockController.getOne);
router.post("/", stockController.post);
router.put("/:id", stockController.update);
//router.delete("/:id", stockController.delete);

module.exports = router;
