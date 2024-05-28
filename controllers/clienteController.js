const Cliente = require('../models/Cliente');

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar clientes', error });
  }
};

exports.obterCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter cliente', error });
  }
};

exports.atualizarCliente = async (req, res) => {
  try {
    const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!clienteAtualizado) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json({ message: 'Cliente atualizado com sucesso', clienteAtualizado });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar cliente', error });
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!clienteEliminado) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json({ message: 'Cliente eliminado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao eliminar cliente', error });
  }
};
