const express = require('express');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes'); // Importando as rotas de pets

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', petRoutes); // Registrando as rotas de pets

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
