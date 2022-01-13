//Importation
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//importation routes
const userRoutesSignUp = require ('./routes/user');
const userRoutesLogin = require ('./routes/user');

//Connection de notre API à la base de données
mongoose.connect('mongodb+srv://Eddie15:PopuOk5@p6.2digh.mongodb.net/P6?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//Middleware général permettant à tout utilisateurs et à l'application d'utiliser l'API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Middleware qui intercepte les requetes qui ont un content type au format json et nous met à dispostion ce contenu, elle nous donne une accés au corps 
//de la requête qui est req.body
app.use(express.json());

//Enregistrement des routes API
app.use('/api/auth/signup', userRoutesSignUp);
app.use('/api/auth/login', userRoutesLogin);

module.exports = app;