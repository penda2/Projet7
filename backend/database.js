const mysql = require('mysql');

//connexion à la base de données/ gestion d'erreur  
const dbUser = mysql.createConnection({
    host: 'localhost',
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: 'groupomania'
})
dbUser.query(`select * from user`, (err, result, fields) => { 
  if(err) {
      return console.log('DB connecté!');
  }
  return console.log(result);
});

module.export = dbUser;