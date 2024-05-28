const mongoose = require('mongoose');

const assemblySchema = new mongoose.Schema({
  droneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Drone', required: true },
  pecas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Piece', required: true }],
  dataMontagem: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Assembly', assemblySchema);
