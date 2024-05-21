const express = require('express');
const mongoose = require('mongoose');
const clienteRoutes = require('./routes/clientesRoutes');
const droneRoutes = require('./routes/dronesRoutes');
const bodyParser = require('body-parser');

const mongoDBUrl = 'mongodb+srv://3491415:xzdsaewq4321@cluster1.gqjm5n1.mongodb.net/drones';

mongoose.connect(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Conexão com o MongoDB Atlas estabelecida com sucesso!"))
  .catch(err => console.error("Erro ao conectar ao MongoDB Atlas:", err));

const app = express();

app.use(bodyParser.json()); 

app.use('/api', clienteRoutes); 
app.use('/api', droneRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor a funcionar na porta ${PORT}`);
});
