const express = require('express');
const router = express.Router();
const assembliesController = require('../controllers/assembliesController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, assembliesController.listarMontagens);
router.get('/:id', authMiddleware, assembliesController.obterMontagem);
router.post('/', authMiddleware, assembliesController.criarMontagem);
router.put('/:id', authMiddleware, assembliesController.atualizarMontagem);
router.delete('/:id', authMiddleware, assembliesController.eliminarMontagem);
router.get('/estatisticas', authMiddleware, assembliesController.getStatistics);

module.exports = router;
