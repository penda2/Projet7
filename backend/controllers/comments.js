const db = require("../database");

exports.createComment = (req, res, next) => {
  const comment = {
    user_id: req.auth.userId,
    comment: req.body.comment,
    created_date: new Date().toISOString().slice(0, 19).replace("T", " "),
  };
  db.query("INSERT INTO comments SET ?", comment, (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      console.log(results);
      res.status(201).json({ message: "New comment created!!" });
    }
  });
};

exports.getAllComments = (req, res, next) => {
  db.query("SELECT * FROM comments", (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      res.status(200).json({ results });
      console.log(error);
    }
  });
};
exports.getCommentById = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT * FROM comments where id = ?", [id], (error, results) => {
    if (error) {
      res.json({ error });
    } else {
      console.log(results);
      res.status(200).json({ results });
      console.log(error);
    }
  });
};
exports.updateComment = (req, res, next) => {
  const id = req.params.id;
  let updateQuery =
    "UPDATE comments SET comment = ? WHERE id = ?";
  db.query(
    updateQuery,
    [req.body.comment, id],
    (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        console.log(results);
        res.status(201).json({ message: "Comment updated!!" });
        console.log(error);
      }
    }
  );
};
exports.deleteComment = (req, res, next) => {
  const id = req.params.id;
  db.query("SELECT * FROM comments where id = ?", [id], (error, results) => {
    if (error) {
      res.json({ error });
    } else if (results.length === 0) {
      res.status(404).json({ message: "Not found !" });
    } else {
      if (results[0].userId === req.auth.userId) {
        db.query("DELETE from comments where id = ?", [id], (error, results) => {
          console.log(results);
          if (error) {
            res.json({ error });
          } else {
            res.status(200).json({ message: "Comment deleted!!" });
          }
        });
      } else {
        res.status(401).json({ message: "non autorisé !" });
      }
    }
  });
};
