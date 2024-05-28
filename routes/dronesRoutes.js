const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/dronesController');

router.get('/', dronesController.listarDrones);
router.get('/:id', dronesController.obterDrone);
router.post('/', dronesController.criarDrone);
router.put('/:id', dronesController.atualizarDrone);
router.delete('/:id', dronesController.eliminarDrone);

module.exports = router;
