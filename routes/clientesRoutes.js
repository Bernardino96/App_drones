const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clientesController');

router.get('/clientes', clienteController.listarTodosOsClientes);
router.post('/clientes', clienteController.adicionarCliente);
router.get('/clientes/:id', clienteController.obterClientePorId);
router.put('/clientes/:id', clienteController.atualizarCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);

module.exports = router;
