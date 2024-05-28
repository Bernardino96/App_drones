const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clienteController');

router.get('/', clientesController.listarClientes);
router.get('/:id', clientesController.obterCliente);
router.put('/:id', clientesController.atualizarCliente);
router.delete('/:id', clientesController.eliminarCliente);

module.exports = router;
