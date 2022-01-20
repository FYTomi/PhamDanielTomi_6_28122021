const express = require('express');
const router = express.Router();

//Import middleware token authentificateur
const auth= require('../middleware/auth');
const likeController = require('../controllers/like');

router.post('/:id/like',auth, likeController.likeStatus);

module.exports = router;