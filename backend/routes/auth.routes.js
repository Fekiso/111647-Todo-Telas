const authController = require("../controllers/auth.js");
const express = require("express");
const router = express.Router();

router.post("/login", authController.Login);
router.post("/logout", authController.Logout);

module.exports = router;
