const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
//const auth = require("../middleware/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
/*
router.get("/", userController.getAllUsers);
router.post("/", userController.createNewUser);
router.get("/:id", userController.getUserById);
*/
module.exports = router;
