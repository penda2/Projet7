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
  };
  db.query("SELECT * FROM user WHERE email = ?", user.email, (error, results) => {
      console.log(results);
      if (error) throw error;
      if (results[0]) return res.json({status: "error",
          error: " email déjà utilisé !"})
      else { 
        db.query("INSERT INTO user SET ?", user, (error, results) => {
          if (error) {
            res.json({ error });
          } else {
            console.log(results);
            res.status(201).json({ message: "Successful registration !!" });
            console.log(user);
          }
        });
      }
    })
})
.catch((error) => res.status(500).json({ error }));
};
// connexion : recherche utilisateur par mail + comparaison mot de passe
exports.login = (req, res, next) => {
const { email, password } = req.body;
const validPassword = bcrypt.compare(req.body.password, password);
if (!email || !password)
  return res.json({
    status: "error", error: "Veuillez entrer vorte email et mot de passe !",
  });
else {
  db.query(
    "SELECT email FROM user WHERE email = ?",[email], (error, results) => {
      console.log(results);
      if (error) throw error;
      if (!results[0] || !validPassword) // voir compare mdpass
        return res.status(500).json({
          status: "error",
          error: " email ou mot de passe incorrect !",
        });
      else {
        const token = jwt.sign(
          { userId: results[0].id },
          process.env.CODE_TOKEN,
          { expiresIn: "24h",}
        );
        return res.status(200).json({ token: token });
      }
    }
  );
}
};