const Drone = require('../models/Drone'); 

exports.addDrone = async (req, res) => {
  const { name, model, clienteId } = req.body;

  try {
    const drone = new Drone({ name, model, clienteId });
    await drone.save();

    res.status(201).json({ message: 'Drone adicionado com sucesso', drone });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar drone', error });
  }
};

exports.getAllDrones = async (req, res) => {
  try {
    const drones = await Drone.find();
    res.json(drones);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar drones', error });
  }
};

exports.getDroneById = async (req, res) => {
  try {
    const drone = await Drone.findById(req.params.id);
    if (!drone) {
      return res.status(404).json({ message: 'Drone não encontrado' });
    }
    res.json(drone);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar drone', error });
  }
};

exports.updateDrone = async (req, res) => {
  try {
    const drone = await Drone.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!drone) {
      return res.status(404).json({ message: 'Drone não encontrado' });
    }
    res.json({ message: 'Drone atualizado com sucesso', drone });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar drone', error });
  }
};

exports.deleteDrone = async (req, res) => {
  try {
    const drone = await Drone.findByIdAndDelete(req.params.id);
    if (!drone) {
      return res.status(404).json({ message: 'Drone não encontrado' });
    }
    res.json({ message: 'Drone deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar drone', error });
  }
};
