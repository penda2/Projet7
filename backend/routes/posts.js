const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/posts');

router.get("/", auth, postCtrl.getAllPosts);
router.post("/", auth, multer, postCtrl.createPost);
router.put("/:id", auth, postCtrl.updatePost);
router.get("/:id", auth, postCtrl.getPostById);

/*
router.delete("/:id", auth, postCtrl.deletePost);


*/

module.exports = router;