const express = require("express");
const router = express.Router();

//Import middleware token authentificateur
const auth = require("../middleware/auth");
//Import Multer
const multer = require("../middleware/multer-config");
const sauceController = require("../controllers/sauce");

//POST - Middleware dont le console.log indique les détails de la sauce
//PUT - Mettre à jour une sauce existante
//DELETE - Suppression d'une sauce existante
//GET -  Récup d'une sauce spécifique, ":" pour indiquer à Express que cette partie de la route est dynamique
//GET - Récup toutes les sauces
router.post("/", auth, multer, sauceController.createSauce);
router.put("/:id", auth, multer, sauceController.modifySauce);
router.delete("/:id", auth, sauceController.deleteSauce);
router.get("/:id", auth, sauceController.getOneSauce);
router.get("/", auth, sauceController.getAllSauces);

module.exports = router;
