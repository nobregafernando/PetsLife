const express = require('express');
const cors = require('cors'); // Certifique-se que isso está apenas no backend
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para CORS
app.use(cors());

// Rota básica para teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Registrar a rota de teste
const testRoutes = require('./routes/testRoutes');
app.use('/api', testRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
