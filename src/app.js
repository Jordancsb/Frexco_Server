import createTable, { insertProduto, updateProduto, selectProdutos, deleteProduto } from './Contoller/produto.js'
import express from 'express'

const app = express();
app.use(express.json());

createTable()

app.get('/', function (req, res) {
  res.send('Olá mundo')
})

app.get('/produto', async function (req, res) {
  let produtos = await selectProdutos()
  res.json(produtos)
})

app.post('/produto', function(req, res) {
  insertProduto(req.body)
  res.json({
    "statuscode": 200
  })
})

app.put('/produto', function(req, res) {
  if(req.body && !req.body.id) {
    res.json ({
      "statuscode": 400,
      "msg": "Você precisa informar o id"
    })
  }  else {
    updateProduto(req.body)
    res.json({
      "statuscode": 200
    })
  }
})

app.delete('/produto', function (req, res) {
  let produto = deleteProduto(req.body.id)
  res.json(produto)
})

app.listen(3000, () => console.log('API Rodando'))