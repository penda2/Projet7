const fs = require("fs");
const db = require("../database");

exports.createPost = (req, res, next) => {
  console.log(req.file);
  const post = {
    userId: req.auth.userId,
    title: req.body.title,
    postBody: req.body.post,
    image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    createdDate: new Date().toISOString().slice(0, 19).replace("T", " "),
  };
    db.query("INSERT INTO posts SET ?", post, (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      console.log(results);
      res.status(201).json({ message: "New post created!!" });
    }
  });
};

exports.getAllPosts = (req, res, next) => {
  db.query("SELECT * FROM posts", (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      res.status(200).json({ results });
      console.log(error);
    }
  });
};
exports.getPostById = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT * FROM posts where id = ?", [id], (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      console.log(results);
      res.status(200).json({ results });
      console.log(error);
    }
  });
};
exports.updatePost = (req, res, next) => {
  const id = req.params.id;
  let updateQuery = "UPDATE posts SET title = ?, postBody = ?, image = ? WHERE id = ?";
  db.query(updateQuery, [req.body.title, req.body.post, req.body.image, id], (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        console.log(results);
        res.status(201).json({ message: "Post updated!!" });
        console.log(error);
      }
    }
  );
};
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT * FROM posts where id = ?", [id], (error, results) => {
    if (error) {
      res.json({ error });
    }else if(results.length === 0){
      res.status(404).json({message:"Not found !"})
    } else {
      if (results[0].userId === req.auth.userId) {
        db.query("DELETE from posts where id = ?", [id], (error, results) => {
          console.log(results);
          if (error) {
            res.json({ error });
          } else {
            res.status(200).json({ message: "Post deleted!!" });
          }
        });
      } else {
        res.status(401).json({ message: "non autorisé !" });
      }
    }
  });
  
};

exports.likePost = (req, res, next) => {
  const like = {
    userId: req.auth.userId,
    postId: req.params.id,
  };
  db.query("INSERT INTO likes SET ?", like, (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      console.log("test:", results);
      res.status(201).json({ message: "Post liked !!" });
    }
  });
}
