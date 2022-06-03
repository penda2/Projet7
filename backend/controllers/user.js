// Import des packages nécessaires à l'incription et connexion d'un user
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database");
require("dotenv").config();

// Inscription: Hash du mot de passe avc bcrypt et enregistrement de l'utilisateur créé dans la BDD + gestion d'erreurs
exports.signup = (req, res, next) => {
  console.log("test");
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        passwordConfirm: hash,
      });
    })
    db.query('INSERT IN user SET ?', user, function(error, results){
      if(error){
        console.log(error);
      }else {
        res.status(200).json;
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
// Identification: recherche utilisateur par mail + comparaison mot de passe
exports.login = (req, res, next) => {
  user
    db.query('SELECT email FROM user')
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
      bcrypt
        .compare(req.body.password, user.password && req.body.passwordConfirm, user.passwordConfirm )
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, `${process.env.CODE_TOKEN}`, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};


/*
exports.getAllUsers = (req, res, next) => {
  res.send("Liste utilisateurs");
};

exports.createNewUser = (req, res, next) => {
  res.send("créer nouvel utilisateurs");
};

exports.getUserById = (req, res, next) => {
  res.send("Trouver utilisateur par son Id");
};
*/