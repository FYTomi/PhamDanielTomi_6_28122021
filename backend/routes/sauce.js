const express = require('express');
const router = express.Router();

//Import middleware token authentificateur
const auth= require('../middleware/auth')

const sauceController = require ('../controllers/sauce');

//Middleware dont le console.log indique les détails de la sauce
   //Mettre à jour une sauce existante
   //Suppression d'une sauce existante
   //Récup d'une sauce spécifique, ":" pour indiquer à Express que cette partie de la route est dynamique
   //Récup toutes les sauces
   router.post('/',auth, sauceController.createThing);
   router.put('/:id',auth, sauceController.modifyThing );
   router.delete('/:id',auth, stuffController.deleteThing)
   router.get('/:id',auth, sauceController.getOneThing);
   router.get('/',auth, sauceController.getAllThings);
 
   module.exports = router;