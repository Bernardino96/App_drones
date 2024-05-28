const express = require('express');
const router = express.Router();
const assembliesController = require('../controllers/assembliesController');

router.get('/', assembliesController.listarMontagens);
router.get('/:id', assembliesController.obterMontagem);
router.post('/', assembliesController.criarMontagem);
router.put('/:id', assembliesController.atualizarMontagem);
router.delete('/:id', assembliesController.eliminarMontagem);

module.exports = router;
