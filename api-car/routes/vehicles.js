const express = require('express');
const router = express.Router();
const vehiclesCtrl = require('../controllers/vehicles')

// Cadastrar um Veículo
router.post('/vehicles', vehiclesCtrl.create)

// Buscar e apresentar todos os Veículos
router.get('/vehicles', vehiclesCtrl.getAll)

// Buscar e apresentar um veículo específico pelo ID
router.get('/vehicles/:id', vehiclesCtrl.getId)

// Atualizar um veículo (Parcial)
router.patch('/vehicles/:id', vehiclesCtrl.update)

// Remover um Veículo
router.delete('/vehicles/:id', vehiclesCtrl.remove)


module.exports = router;