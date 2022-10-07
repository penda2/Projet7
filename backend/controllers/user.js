// Import des packages nécessaires à l'incription et connexion d'un user
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database");
require("dotenv").config();

// Inscription: Hash du mot de passe avc bcrypt et enregistrement de l'utilisateur créé dans la BDD + gestion d'erreurs
exports.signup = (req, res, next) => {
bcrypt.hash(req.body.password, 10)
.then((hash) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash,
    isAdmin: req.body.isAdmin
  };
  db.query("SELECT * FROM user WHERE email = ?", user.email, (error, results) => {
      if (error) throw error;
      if (results[0]) return res.json({status: "error",
          error: " email déjà utilisé !"})
      else { 
        db.query("INSERT INTO user SET ?", user, (error, results) => {
          if (error) {
            res.json({ error });
          } else {
            res.status(200).json({ user: user });
          }
        });
      }
    })
})
.catch((error) => res.status(500).json({ error }));
};
// sécurité de connexion : recherche utilisateur par mail + comparaison mot de passe
exports.login = (req, res, next) => {
const { email, password } = req.body;
if (!email || !password){
  return res.json({
    status: "error", error: "Veuillez entrer vorte email et mot de passe !",
  });
}else {
  db.query(
    "SELECT id, email, password, isAdmin, firstName FROM user WHERE email = ?", [email], (error, results) => {
      if (error) throw error;
      if (!results[0]) {
        return res.status(500).json({
          status: "error",
          error: " email ou mot de passe incorrect !",
        });
      }else {
        bcrypt
          .compare(password, results[0].password)
          .then((valid) => {
            if (!valid) {
              return res.status(501).json({
                status: "error",
                error: " email ou mot de passe incorrect !",
              });
            }
            const token = jwt.sign(
              { isAdmin: results[0].isAdmin, userId: results[0].id },
              process.env.CODE_TOKEN,
              { expiresIn: "24h" }
            );
            return res.status(200).json({
              isAdmin: results[0].isAdmin,
              firstName: results[0].firstName,
              userId: results[0].id,
              token: token,
            });
          })
          .catch((error) => {
           return res.status(500).json( error )
          });
      }
    }
  );
}
};