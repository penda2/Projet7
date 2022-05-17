// Import des packages nécessaires au projet aprés installation
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

const path = require('path');
const helmet = require('helmet'); 
require('dotenv').config();
const mysql = require('mysql');

const app = express();

const { Console } = require('console');

app.use(helmet()); // Protège l'application express de certaines vulnérabilités des headers HTTP 

// Autorisation d'acces aux URL de l'API par réglage des entêtes 
app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});

app.use("/api/auth", userRoutes);

app.use(bodyParser.json());


module.exports = app;