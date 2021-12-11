const express = require('express')
const router = express.Router()
const estoqueController = require('../controllers/estoqueController')

// Lista de rotas
router.get('/todas', estoqueController.listarTodas)
router.get('/:id', estoqueController.listarPorId)
router.post('/', estoqueController.inserir)
router.delete('/:id', estoqueController.deletar)
// router.put('/:id', estoqueController.alterar)

// Exportando as rotas
module.exports = router