const fs = require("fs");
const db = require("../database");


exports.createPost = (req, res, next) => {
  const post = {
    userId: req.auth.userId,
    title: req.body.title,
    postBody: req.body.post,
    image: req.body.image,
    createdDate: new Date(),
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
