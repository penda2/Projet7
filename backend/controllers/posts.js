const fs = require("fs");
const db = require("../database");


exports.createPost = (req, res, next) => {
  const user = {
    userId: req.body.userId,
    title: req.body.title,
    post: req.body.post,
    image: req.body.image,
  };
  db.query("INSERT INTO posts SET ?", user, (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      console.log(results);
      res.status(201).json({ user });
      console.log(user);
    }
  });
};
