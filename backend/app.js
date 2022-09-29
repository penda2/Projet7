// Import des packages nécessaires au projet aprés installation
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const postsRoutes = require('./routes/posts')
const commentsRoutes = require('./routes/comments')
const auth = require("./middleware/auth");
const path = require("path");
const helmet = require("helmet");
require("dotenv").config();
const mysql = require("mysql");
const db = require("./database");

const app = express();


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

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use('/api/posts', postsRoutes);
app.use("/api/comments", commentsRoutes);


module.exports = app;
