const express = require ('express'); 
const router = express.Router();

const userControllerLogin = require('../controllers/userLogin');
const userControllerSignUp = require('../controllers/userSignUp');

router.post('/signup', userControllerSignUp);
router.post('/login', userControllerLogin);

module.exports = router;