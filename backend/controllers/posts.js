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
  db.query(
    `SELECT *, posts.id AS postId
    FROM posts
    JOIN user on user.id = posts.userId
    LEFT JOIN (SELECT COUNT(*) as count, postId
	  FROM likes
	  GROUP BY postId) AS likes ON posts.id = postId;
    `,
    (error, results) => {
      console.log("results getAll", results);
      if (error) {
        res.json({ error });
      } else {
        res.status(200).json({ results });
        console.log(error);
      }
    }
  );
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
  db.query("SELECT userId FROM posts WHERE id = ?", [id], (error, results) => {
    if(results[0].userId == req.auth.userId || req.auth.isAdmin) {
      let updateQuery =
        "UPDATE posts SET title = ?, postBody = ?, image = ? WHERE id = ?";
      db.query(
        updateQuery,
        [
          req.body.title,
          req.body.post,
          `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
          id,
        ],
        (error, results) => {
          if (error) {
            res.json({ error });
          } else {
            console.log(results);
            res.status(201).json({ message: "Post updated!!" });
            console.log(error);
          }
        }
      );
    }else {
      res.status(401).json({ message: "Unauthorized!!" });
    }
  });
};
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT userId FROM posts WHERE id = ?", [id], (error, results) => {
    if (results[0].userId == req.auth.userId || req.auth.isAdmin) {
      db.query(
        "DELETE from posts where id = ?",
        [id],
        (error, results) => {
          console.log(results);
          if (error) {
            res.json({ error });
          } else {
            res.status(200).json({ message: "Post deleted!!" });
          }
        }
      );
    } else {
      res.status(401).json({ message: "Unauthorized!!" });
    }
  });



  
};

exports.likePost = (req, res, next) => {
  const like = {
    userId: req.auth.userId,
    postId: req.params.id,
  };
  db.query("SELECT * FROM likes WHERE userId = ? AND postId = ?", [like.userId, like.postId], (error, results) => {
    if(results.length == 0) {
        db.query("INSERT INTO likes SET ?", like, (error, results) => {
          if (error) {
            console.log("resultat insert like", results);
            res.json({ error });
          } else {
            console.log("test:", results);
            res.status(201).json({ message: "Post liked !!" });
          }
        });
    }else {
      db.query(
        "DELETE FROM likes WHERE userId = ? AND postId = ?",
        [like.userId, like.postId],
        (error, results) => {
          if (error) {
            console.log("resultat insert like", results);
            res.json({ error });
          } else {
            console.log("test:", results);
            res.status(200).json({ message: "like deleted !!" });
          }
        }
      );
    }
  })
  

};
exports.getLikes = (req, res, next) => {
  db.query("SELECT * FROM likes", (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      res.status(200).json({ results });
      console.log(error);
    }
  });
};
