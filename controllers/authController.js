const jwt = require('jsonwebtoken');
const Cliente = require('../models/Cliente');

// Gerar Token JWT
const gerarToken = (id) => {
    return jwt.sign({ id }, 'seuSegredoJWT', { expiresIn: '1h' });
};

exports.registrar = async (req, res) => {
    const { id, nome, email, password } = req.body;
    try {
        const novoCliente = new Cliente({ id, nome, email, password });
        await novoCliente.save();
        const token = gerarToken(novoCliente._id);
        res.status(201).json({ token });
    } catch (erro) {
        res.status(400).json({ mensagem: "Erro ao registrar cliente: " + erro.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const cliente = await Cliente.findOne({ email });
        if (!cliente || !(await cliente.comparePassword(password))) {
            return res.status(401).json({ mensagem: "Credenciais inválidas" });
        }
        const token = gerarToken(cliente._id);
        res.status(200).json({ token });
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao fazer login: " + erro.message });
    }
};
