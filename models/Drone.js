const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nome: { type: String, required: true },
    descricao: { type: String, required: true }
});

module.exports = mongoose.model('Drone', droneSchema);
