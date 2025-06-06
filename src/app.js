require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Conectar ao banco de dados
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/produtos', require('./routes/produtoRoutes'));

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});