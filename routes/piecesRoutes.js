const express = require('express');
const router = express.Router();
const piecesController = require('../controllers/piecesController');

router.get('/', piecesController.listarPecas);
router.get('/:id', piecesController.obterPeca);
router.post('/', piecesController.criarPeca);
router.put('/:id', piecesController.atualizarPeca);
router.delete('/:id', piecesController.eliminarPeca);

module.exports = router;
