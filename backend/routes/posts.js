const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/posts');

router.post("/", auth, multer, postCtrl.createPost);
/*
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getPostById);
router.get("/:id", auth, postCtrl.modifyPost);
router.get("/:id", auth, postCtrl.deletePost);


*/

module.exports = router;