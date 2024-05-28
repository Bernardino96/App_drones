const express = require('express');
const { registarCliente, loginCliente } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registarCliente);
router.post('/login', loginCliente);

module.exports = router;
