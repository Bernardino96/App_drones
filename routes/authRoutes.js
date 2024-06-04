const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 

router.post('/register', authController.registarCliente);
router.post('/login', authController.loginCliente);

module.exports = router;
