//modules et outils requis pour le routage
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

//toutes les routes des users et leurs chemins correspondants
router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;