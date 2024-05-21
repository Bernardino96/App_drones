const jwt = require('jsonwebtoken');
const Cliente = require('../models/Cliente');

exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ mensagem: "Não autorizado, token não encontrado" });
    }

    try {
        const decoded = jwt.verify(token, 'seuSegredoJWT');
        req.cliente = await Cliente.findById(decoded.id).select('-password');
        next();
    } catch (erro) {
        res.status(401).json({ mensagem: "Não autorizado, token inválido" });
    }
};
