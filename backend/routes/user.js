const express = require ('express'); 
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrlSignUp);
router.post('/login', userCtrlLogin);

module.exports = router;