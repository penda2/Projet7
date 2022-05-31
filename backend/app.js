// Import des packages nécessaires au projet aprés installation
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const auth = require("./middleware/auth");
const path = require("path");
const helmet = require("helmet");
require("dotenv").config();
const mysql = require("mysql");

//connexion à la base de données/ gestion d'erreur
const db = mysql.createConnection({
  host: "localhost",
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: "groupomania",
});
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mysql DB connecté!!!");
  }
});

const app = express();

const { Console } = require("console");

app.use(helmet()); // Protège l'application express de certaines vulnérabilités des headers HTTP

// Autorisation d'acces aux URL de l'API par réglage des entêtes
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("api/auth/signup", userRoutes);

app.get("/signup", function (req, res) {
  res.send("résultat");
});

/*
//test affichage http://localhost:3000/
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>")
});
*/
module.exports = app;
