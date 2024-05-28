const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cliente: { type: String, required: true },
  // Outros campos do drone, se houver
});

module.exports = mongoose.model('Drone', droneSchema);
