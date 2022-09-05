const fs = require("fs");
const db = require("../database");

exports.createPost = (req, res, next) => {
  const post = {
    userId: req.auth.userId,
    title: req.body.title,
    postBody: req.body.post,
    image: req.body.image,
    createdDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
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
      console.log(results);
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
  let post = req.body;
  let updateQuery = "UPDATE posts SET title = ?, postBody = ?, image = ? WHERE id = ?";
  db.query(updateQuery, [req.body.title, req.body.postBody, req.body.image, id], (error, results) => {
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
