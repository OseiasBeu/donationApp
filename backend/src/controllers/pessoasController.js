// Se vamos acessar um banco de dados precisamos do módulo que faz isso

//Criar uma rota para vizualização de todas as tarefas e não somenta as que ainda não foram concluidas
const conexao = require('../config/conexao')
conexao.connect();

// exports.listar = (req, response) => {
//   const query = 'select * FROM public.pessoas where t.realizado = false'
//   conexao.query(query, (err, res) => {
//     // console.log(err, res.rows)
//     if (err){
//       console.log(err)
//       response.status(500)
//       response.json({"message": "Internal Server Error"})
//     } else if (res.rows.length > 0){
//       response.status(200)
//       response.json(res.rows)
//     } else {
//       res.status(404)
//       res.json({"message": "Nenhuma tarefa cadastrada com esse id"})
//     }
//   })
//   }

exports.listarTodas = (req, response) => {
  const query = 'select * from pessoas;'
  conexao.query(query, (err, res) => {
    // console.log(err, res.rows)
    if (err){
      console.log(err)
      response.status(500)
      response.json({"message": "Internal Server Error"})
    } else if (res.rows.length > 0){
      response.status(200)
      response.json(res.rows)
    } else {
      res.status(404)
      res.json({"message": "Nenhuma tarefa cadastrada com esse id"})
    }
  })
  }


exports.listarPorId = (req, response) => {
  const id = req.params.id
  const query = 'select * from pessoas where id_pessoa = $1'
  conexao.query(query,[id], (err, res) => {
    if (err){
      console.log(err)
      response.status(500)
      response.json({"message": "Internal Server Error"})
    } else if (res.rows.length > 0){
      response.status(200)
      response.json(res.rows)
    } else {
      response.status(404)
      response.json({"message": "Nenhuma pessoa cadastrada com esse id"})
    }
  })
}

exports.inserir = (req, response) => {
  const pessoa = {}
  console.log(req.body)
  pessoa.rg_pessoa = req.body.rg_pessoa
  pessoa.nome_pessoa = req.body.nome_pessoa
  pessoa.idade_pessoa = req.body.idade_pessoa
  pessoa.tamanho_camiseta = req.body.tamanho_camiseta
  pessoa.tamanho_calca = req.body.tamanho_calca
  pessoa.tamanho_calcado = req.body.tamanho_calcado
 
  const query = 'insert into public.pessoas (rg_pessoa, nome_pessoa, idade_pessoa, tamanho_camiseta, tamanho_calca, tamanho_calcado) values ($1, $2, $3, $4, $5, $6)'
 
  conexao.query(query, [pessoa.rg_pessoa, pessoa.nome_pessoa, pessoa.idade_pessoa, pessoa.tamanho_camiseta, pessoa.tamanho_calca, pessoa.tamanho_calcado], (err, result) => {
    if (err){
      console.log(err)
      response.status(500)
      response.json({"message": "Internal Server Error"})
    } else {
      response.status(201)
      response.json({"message": result.insertId})
      // console.log("message": result.insertId)
    }
  })
}

// exports.alterar = (req, response) => {
//   const tarefa = {}
//   tarefa.id = req.params.id
//   tarefa.descricao = req.body.descricao
//   tarefa.data = req.body.data
//   tarefa.realizado = req.body.realizado
//   tarefa.categoria_id = req.body.categoria_id

//   const query = 'update public.tarefas set descricao = $1, data = $2, realizado = $3, categoria_id = $4 where id = $5'
//   conexao.query(query, [tarefa.descricao, tarefa.data, tarefa.realizado, tarefa.categoria_id, tarefa.id], (err, result) => {
//     if (err){
//       console.log(err)
//       response.status(500)
//       response.json({"message": "Internal Server Error"})
//     } else if (result.affectedRows > 0){
//       response.json({"message": "Tarefa alterada"})
//     } else {
//       // response.status(404)
//       // response.json({"message": "Tarefa não encontrada"})
//       response.status(202)
//       response.json({"message": "Tarefa alterada"})
//     }
//   })
// }

// exports.deletar = (req, response) => {
 
//   const id = req.params.id

//   const query = 'delete from tarefas where id = $1'

//   conexao.query(query, [id], (err, result) => {
//     if (err){
//       console.log(err)
//       response.status(500)
//       response.json({"message": "Internal Server Error"})
//     } else if (result.affectedRows > 0){
//       response.status(200)
//       response.json({"message": "Tarefa deleta"})
//     } else {
//       // response.status(404)
//       // response.json({"message": "Tarefa não encontrada"})
//       response.status(200)
//       response.json({"message": "Tarefa deleta"})
//     }
//   })
// }