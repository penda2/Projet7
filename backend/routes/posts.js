//modules et outils requis 
const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/posts');

//toutes les routes des post et leurs chemins correspondants
router.get("/", auth, postCtrl.getAllPosts);
router.post("/", auth, multer, postCtrl.createPost);
router.put("/:id", auth, admin, multer, postCtrl.updatePost);
router.get("/:id", auth, postCtrl.getPostById);
router.delete("/:id", auth, admin, postCtrl.deletePost);
router.post("/:id", auth, postCtrl.likePost);
router.get("/:id", auth, postCtrl.getLikes);

module.exports = router;