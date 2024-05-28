const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true }
});

module.exports = mongoose.model('Drone', droneSchema);
