const Piece = require('../models/Piece');

exports.listarPecas = async (req, res) => {
  try {
    const pecas = await Piece.find();
    res.json(pecas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar peças', error });
  }
};

exports.obterPeca = async (req, res) => {
  try {
    const peca = await Piece.findById(req.params.id);
    if (!peca) {
      return res.status(404).json({ message: 'Peça não encontrada' });
    }
    res.json(peca);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter peça', error });
  }
};

exports.criarPeca = async (req, res) => {
  const { nome, tipo, preco } = req.body;

  try {
    const novaPeca = new Piece({ nome, tipo, preco });
    await novaPeca.save();
    res.status(201).json({ message: 'Peça criada com sucesso', novaPeca });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar peça', error });
  }
};

exports.atualizarPeca = async (req, res) => {
  try {
    const pecaAtualizada = await Piece.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pecaAtualizada) {
      return res.status(404).json({ message: 'Peça não encontrada' });
    }
    res.json({ message: 'Peça atualizada com sucesso', pecaAtualizada });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar peça', error });
  }
};

exports.eliminarPeca = async (req, res) => {
  try {
    const pecaEliminada = await Piece.findByIdAndDelete(req.params.id);
    if (!pecaEliminada) {
      return res.status(404).json({ message: 'Peça não encontrada' });
    }
    res.json({ message: 'Peça eliminada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao eliminar peça', error });
  }
};
