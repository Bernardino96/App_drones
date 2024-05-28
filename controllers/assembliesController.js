const Assembly = require('../models/Assembly');
const Drone = require('../models/Drone');
const Piece = require('../models/Piece');

exports.listarMontagens = async (req, res) => {
  try {
    const montagens = await Assembly.find().populate('droneId pecas');
    res.json(montagens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar montagens', error });
  }
};

exports.obterMontagem = async (req, res) => {
  try {
    const montagem = await Assembly.findById(req.params.id).populate('droneId pecas');
    if (!montagem) {
      return res.status(404).json({ message: 'Montagem não encontrada' });
    }
    res.json(montagem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter montagem', error });
  }
};

exports.criarMontagem = async (req, res) => {
  const { droneId, pecas } = req.body;

  try {
    const drone = await Drone.findById(droneId);
    if (!drone) {
      return res.status(404).json({ message: 'Drone não encontrado' });
    }

    const pecasValidas = await Piece.find({ '_id': { $in: pecas } });
    if (pecasValidas.length !== pecas.length) {
      return res.status(400).json({ message: 'Uma ou mais peças não foram encontradas' });
    }

    const novaMontagem = new Assembly({ droneId, pecas });
    await novaMontagem.save();
    res.status(201).json({ message: 'Montagem criada com sucesso', novaMontagem });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar montagem', error });
  }
};

exports.atualizarMontagem = async (req, res) => {
  try {
    const montagemAtualizada = await Assembly.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!montagemAtualizada) {
      return res.status(404).json({ message: 'Montagem não encontrada' });
    }
    res.json({ message: 'Montagem atualizada com sucesso', montagemAtualizada });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar montagem', error });
  }
};

exports.eliminarMontagem = async (req, res) => {
  try {
    const montagemEliminada = await Assembly.findByIdAndDelete(req.params.id);
    if (!montagemEliminada) {
      return res.status(404).json({ message: 'Montagem não encontrada' });
    }
    res.json({ message: 'Montagem eliminada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao eliminar montagem', error });
  }
};
