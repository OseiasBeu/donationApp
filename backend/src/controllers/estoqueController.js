const { Client } = require('pg');

const conexao = new Client ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  });

conexao.connect();


exports.listarTodas = (req, response) => {
    const query = 'select * from estoque;'
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
        res.json({"message": "Nenhum produto cadastrado"})
      }
    })
}


exports.listarPorId = (req, response) => {
    const id = req.params.id
    const query = 'select * from estoque where id_produto = $1'
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
        response.json({"message": "Nenhum produto cadastrado com esse id"})
      }
    })
}

  exports.inserir = (req, response) => {
    const produto = {}
    console.log(req.body)
    produto.nome_produto = req.body.nome_produto
    produto.descricao_produto = req.body.descricao_produto
    produto.tamanho_produto = req.body.tamanho_produto
    produto.tipo_produto = req.body.tipo_produto
    produto.nome_doador = req.body.nome_doador
   
    const query = 'insert into public.estoque (nome_produto, descricao_produto, tamanho_produto, tipo_produto, nome_doador) values ($1, $2, $3, $4, $5)'
   
    conexao.query(query, [produto.nome_produto, produto.descricao_produto, produto.tamanho_produto, produto.tipo_produto, produto.nome_doador], (err, result) => {
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

exports.deletar = (req, response) => {
  const id = req.params.id
  const query = 'delete from public.estoque where id_produto = $1'

  conexao.query(query, [id], (err, result) => {
    if (err){
      console.log(err)
      response.status(500)
      response.json({"message": "Internal Server Error"})
    } else if (result.affectedRows > 0){
      response.status(200)
      response.json({"message": "produto deletado"})
    } else {
      // response.status(404)
      // response.json({"message": "Tarefa não encontrada"})
      response.status(200)
      response.json({"message": "produto deletado"})
    }
  })
}