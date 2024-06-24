const express = require('express');
const router = express.Router();

// Simulação de banco de dados
let pets = [];

// Rota para cadastrar um pet
router.post('/pets', (req, res) => {
    const pet = req.body;
    pets.push(pet);
    res.status(201).json({ message: 'Pet cadastrado com sucesso!', pet });
});

// Rota para listar todos os pets
router.get('/pets', (req, res) => {
    res.status(200).json(pets);
});

module.exports = router;
