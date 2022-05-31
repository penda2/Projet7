const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
//const auth = require("./middleware/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
/*
router.get("/", auth, userController.getAllUsers);

router.post("/", auth, userController.createNewUser);
router.get("/:id", auth, userController.getUserById);
*/
module.exports = router;
