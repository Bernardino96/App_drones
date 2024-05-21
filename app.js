const express = require('express');
const mongoose = require('mongoose');
const clienteRoutes = require('./routes/clientesRoutes');
const droneRoutes = require('./routes/dronesRoutes');
const authRoutes = require('./routes/authRoutes'); 
const bodyParser = require('body-parser');


const mongoDBUrl = 'mongodb+srv://3491415:xzdsaewq4321@cluster1.gqjm5n1.mongodb.net/drones';

// Conexão ao MongoDB
mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Conexão com o MongoDB Atlas estabelecida com sucesso!"))
  .catch(err => console.error("Erro ao conectar ao MongoDB Atlas:", err));

const app = express();

// Middleware
app.use(bodyParser.json()); // Para parsing de application/json

// Registro de Rotas
app.use('/api', clienteRoutes); // Base path para todas as rotas de clientes
app.use('/api', droneRoutes); // Base path para todas as rotas de drones
app.use('/api/auth', authRoutes); // Base path para todas as rotas de autenticação

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor a funcionar na porta ${PORT}`);
});
