const express = require('express');
const router = express.Router();
const piecesController = require('../controllers/piecesController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, piecesController.listarPecas);
router.get('/:id', authMiddleware, piecesController.obterPeca);
router.post('/', piecesController.criarPeca);
router.put('/:id', piecesController.atualizarPeca);
router.delete('/:id', piecesController.eliminarPeca);

module.exports = router;
