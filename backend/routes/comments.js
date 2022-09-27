const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const commentCtrl = require("../controllers/comments");

router.get("/", auth, commentCtrl.getAllComments);
router.post("/", auth, multer, commentCtrl.createComment);
router.put("/:id", auth, commentCtrl.updateComment);
router.get("/:id", auth, commentCtrl.getCommentById);
router.delete("/:id", auth, commentCtrl.deleteComment);

module.exports = router;
