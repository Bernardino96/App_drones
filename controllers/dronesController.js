const Drone = require('../models/Drone');

exports.listarTodosOsDrones = async (req, res) => {
    try {
        const drones = await Drone.find();
        res.json(drones);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao procurar drones: " + erro.message });
    }
};

exports.adicionarDrone = async (req, res) => {
    try {
        const novoDrone = new Drone(req.body);
        await novoDrone.save();
        res.status(201).json(novoDrone);
    } catch (erro) {
        res.status(400).json({ mensagem: "Erro ao adicionar drone: " + erro.message });
    }
};

exports.obterDronePorId = async (req, res) => {
    try {
        const drone = await Drone.findById(req.params.id);
        if (!drone) {
            return res.status(404).json({ mensagem: "Drone não encontrado" });
        }
        res.json(drone);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao procurar drone: " + erro.message });
    }
};

exports.atualizarDrone = async (req, res) => {
    try {
        const droneAtualizado = await Drone.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!droneAtualizado) {
            return res.status(404).json({ mensagem: "Drone não encontrado" });
        }
        res.json(droneAtualizado);
    } catch (erro) {
        res.status(400).json({ mensagem: "Erro ao atualizar drone: " + erro.message });
    }
};

exports.deletarDrone = async (req, res) => {
    try {
        const droneDeletado = await Drone.findByIdAndDelete(req.params.id);
        if (!droneDeletado) {
            return res.status(404).json({ mensagem: "Drone não encontrado" });
        }
        res.status(204).send();
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao remover drone: " + erro.message });
    }
};
