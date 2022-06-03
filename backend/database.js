//connexion à la base de données/ gestion d'erreur
const mysql = require("mysql");
require("dotenv").config();
const db = mysql.createConnection({
    host: 'localhost',
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: 'Groupomania'
  })
  db.connect((error) => {
    if(error) {
    console.log(error);
  }else {
    console.log('Mysql DB connecté!!!');
  }
  });

module.exports = db;
