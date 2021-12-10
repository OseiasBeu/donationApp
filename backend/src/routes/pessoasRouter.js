const express = require('express')
const router = express.Router()
const pessoasController = require('../controllers/pessoasController')

// Lista de rotas
router.get('/todas', pessoasController.listarTodas)
router.get('/:id', pessoasController.listarPorId)
router.post('/', pessoasController.inserir)
// router.put('/:id', pessoasController.alterar)
// router.delete('/:id', pessoasController.deletar)
// Exportando as rotas
module.exports = router