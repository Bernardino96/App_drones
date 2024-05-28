const Drone = require('../models/Drone');

exports.listarDrones = async (req, res) => {
  try {
    const drones = await Drone.find();
    res.json(drones);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar drones', error });
  }
};

exports.obterDrone = async (req, res) => {
  try {
    const drone = await Drone.findById(req.params.id);
    if (!drone) {
      return res.status(404).json({ message: 'Drone não encontrado' });
    }
    res.json(drone);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter drone', error });
  }
};
exports.registarDrone = async (req, res) => {
  const { nome, clienteId } = req.body;

  try {

    const novoDrone = new Drone({ nome, clienteId });
    await novoDrone.save();
    res.status(201).json({ message: 'Drone registado com sucesso', novoDrone });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registar drone', error });
  }
};

exports.atualizarDrone = async (req, res) => {
  try {
    const droneAtualizado = await Drone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!droneAtualizado) {
      return res.status(404).json({ message: 'Drone não encontrado' });
    }
    res.json({ message: 'Drone atualizado com sucesso', droneAtualizado });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar drone', error });
  }
};

exports.eliminarDrone = async (req, res) => {
  try {
    const droneEliminado = await Drone.findByIdAndDelete(req.params.id);
    if (!droneEliminado) {
      return res.status(404).json({ message: 'Drone não encontrado' });
    }
    res.json({ message: 'Drone eliminado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao eliminar drone', error });
  }
};
