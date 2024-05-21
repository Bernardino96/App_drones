const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Cliente', clienteSchema);
