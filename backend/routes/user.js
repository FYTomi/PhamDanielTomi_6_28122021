const express = require("express");
const router = express.Router();
//Controleur pour associer les fonction aux différentes routes
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
