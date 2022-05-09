const localController = require('../controllers/locales.js')
const express = require("express");
const router = express.Router();

router.get("/", localController.getAll);
router.get("/:id", localController.getOne);
router.post("/", localController.post);
router.put("/:id", localController.update);
router.delete("/:id", localController.delete);

module.exports = router;
