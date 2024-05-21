const Cliente = require('../models/Cliente');

exports.listarTodosOsClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao procurar clientes: " + erro.message });
    }
};

exports.adicionarCliente = async (req, res) => {
    try {
        const novoCliente = new Cliente(req.body);
        await novoCliente.save();
        res.status(201).json(novoCliente);
    } catch (erro) {
        res.status(400).json({ mensagem: "Erro ao adicionar cliente: " + erro.message });
    }
};

exports.obterClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ mensagem: "Cliente não encontrado" });
        }
        res.json(cliente);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao procurar cliente: " + erro.message });
    }
};

exports.atualizarCliente = async (req, res) => {
    try {
        const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!clienteAtualizado) {
            return res.status(404).json({ mensagem: "Cliente não encontrado" });
        }
        res.json(clienteAtualizado);
    } catch (erro) {
        res.status(400).json({ mensagem: "Erro ao atualizar cliente: " + erro.message });
    }
};

exports.deletarCliente = async (req, res) => {
    try {
        const clienteDeletado = await Cliente.findByIdAndDelete(req.params.id);
        if (!clienteDeletado) {
            return res.status(404).json({ mensagem: "Cliente não encontrado" });
        }
        res.status(204).send();
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao remover cliente: " + erro.message });
    }
};
