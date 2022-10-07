// Import des packages nécessaires à l'authentification de l'utilisateur 
const jwt = require('jsonwebtoken');
require('dotenv').config();

//accès au token de connexion, sa verification en comparaison, gestion d'erreur
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, `${process.env.CODE_TOKEN}`);
        const userId = decodedToken.userId;
        req.auth = {...decodedToken};
        if(req.body.userId && req.body.userId !== userId) {
            throw 'ID utilisateur invalide !'
        }else {
            next();
        }
    }catch {
        res.status(401).json({
            error: new Error('Requête invalide!')
        });
    }
};
