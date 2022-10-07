const fs = require("fs"); // gestionnaire de fichiers
const db = require("../database"); //import de la BDD

// création d'un post, gestion d'esrreurs et son envoi à la BDD
exports.createPost = (req, res, next) => {
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
      res.status(201).json({ message: "New post created!!" });
    }
  });
};

// Sélection de tous les post de la BDD, gestion d'esrreurs 
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
      if (error) {
        res.json({ error });
      } else {
        res.status(200).json({ results });
      }
    }
  );
};

// Sélection d'un post de la BDD par son id, gestion d'esrreurs 
exports.getPostById = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT * FROM posts where id = ?", [id], (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      res.status(200).json({ results });
    }
  });
};

// modification d'un post de la BDD sélectionné par son id, gestion d'esrreurs 
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
            res.status(201).json({ message: "Post updated!!" });
          }
        }
      );
    }else {
      res.status(401).json({ message: "Unauthorized!!" });
    }
  });
};

// Suppression d'un post de la BDD par son id, gestion d'esrreurs 
exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT userId FROM posts WHERE id = ?", [id], (error, results) => {
    if (results[0].userId == req.auth.userId || req.auth.isAdmin) {
      db.query(
        "DELETE from posts where id = ?",
        [id],
        (error, results) => {
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

// Création du systme like: sélection du nombre de likes par post, 1 utilisateur aime 1 fois un post 
exports.likePost = (req, res, next) => {
  const like = {
    userId: req.auth.userId,
    postId: req.params.id,
  };
  db.query("SELECT * FROM likes WHERE userId = ? AND postId = ?", [like.userId, like.postId], (error, results) => {
    if(results.length == 0) {
        db.query("INSERT INTO likes SET ?", like, (error, results) => {
          if (error) {
            res.json({ error });
          } else {
            res.status(201).json({ message: "Post liked !!" });
          }
        });
    }else {
      db.query(
        "DELETE FROM likes WHERE userId = ? AND postId = ?",
        [like.userId, like.postId],
        (error, results) => {
          if (error) {
            res.json({ error });
          } else {
            res.status(200).json({ message: "like deleted !!" });
          }
        }
      );
    }
  })
};

// Sélection de tous les likes de la BDD, gestion d'esrreurs 
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
