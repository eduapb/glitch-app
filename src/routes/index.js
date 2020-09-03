const express = require('express');
const router = express.Router();
const { checkAge, isRegistered } = require('../middlewares');
const { postWish } = require('../controllers');

// We use the middleware to check the age 
router.post('/sendWish', isRegistered, checkAge, postWish);

module.exports = router;
