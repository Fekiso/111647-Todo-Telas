const rolController = require('../controllers/roles.js')
const express = require("express");
const router = express.Router();

router.get("/", rolController.getAll);
router.get("/:id", rolController.getOne);
router.post("/", rolController.post);
router.put("/:id", rolController.update);
router.delete("/:id", rolController.delete);

module.exports = router;
