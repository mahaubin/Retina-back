const express = require('express');

const userController = require('../Controller/userController');

const router = express.Router();

// login route
router.post('/login', userController.loginUser);

// signup route
router.post('/signup', userController.signupUser);

// logout Admin
router.get('/logoutUser', userController.logoutUser);

// verify if there are a user loggeIn Admin
router.get('/loggedInUser', userController.loggedInUser);

module.exports = router;
