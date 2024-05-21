const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', authController.registrar);
router.post('/login', authController.login);

router.get('/perfil', authMiddleware.protect, (req, res) => {
    res.json(req.cliente);
});

module.exports = router;
