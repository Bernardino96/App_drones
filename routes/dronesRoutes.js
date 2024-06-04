const express = require('express');
const router = express.Router();
const dronesController = require('../controllers/dronesController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/add', dronesController.addDrone);
router.get('/', authMiddleware, dronesController.getAllDrones);
router.get('/:id', dronesController.getDroneById);
router.put('/:id', dronesController.updateDrone);
router.delete('/:id', dronesController.deleteDrone);

module.exports = router;
