const Cliente = require('../models/Cliente');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registarCliente = async (req, res) => {
  const { nome, email, password } = req.body;

  try {
    const novoCliente = new Cliente({ nome, email, password });
    await novoCliente.save();
    res.status(201).json({ message: 'Cliente registado com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao registar cliente', error });
  }
};

exports.loginCliente = async (req, res) => {
  const { email, password } = req.body;

  try {
    const cliente = await Cliente.findOne({ email });
    if (!cliente) {
      return res.status(404).json({ message: 'Credenciais Invalidas' });
    }

    const isMatch = await bcrypt.compare(password, cliente.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Credenciais Invalidas' });
    }

    const token = jwt.sign({ id: cliente._id }, 'seuSegredoJWT', { expiresIn: '1h' });
    res.json({ message: 'Login bem-sucedido', token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao efetuar login', error });
  }
};
