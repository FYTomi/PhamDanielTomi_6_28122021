//Importation
const express = require('express');
const mongoose = require('mongoose');

//Accéder au path de notre serveur
const path = require('path');

//importation routes
const userRoutes = require ('./routes/user');
const sauceRoutes = require('./routes/sauce');
const likeRoutes = require('./routes/like');

const app = express();

//Middleware général permettant à tout utilisateurs et à l'application d'utiliser l'API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//Connection de notre API à la base de données
mongoose.connect('mongodb+srv://Eddie15:PopuOk5@p6.2digh.mongodb.net/P6?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Middleware qui intercepte les requetes qui ont un content type au format json et nous met à dispostion ce contenu, elle nous donne une accés au corps 
//de la requête qui est req.body
app.use(express.json());

//Middleware qui répond aux requête envoyés vers le dossier images et s'en serve
app.use('/images', express.static(path.join(__dirname, 'images')));

//Enregistrement des routes API
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
app.use('/api/sauces', likeRoutes);

module.exports = app;