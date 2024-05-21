const express = require('express');
const router = express.Router();
const droneController = require('../controllers/dronesController');

router.get('/drones', droneController.listarTodosOsDrones);
router.post('/drones', droneController.adicionarDrone);
router.get('/drones/:id', droneController.obterDronePorId);
router.put('/drones/:id', droneController.atualizarDrone);
router.delete('/drones/:id', droneController.deletarDrone);

module.exports = router;
