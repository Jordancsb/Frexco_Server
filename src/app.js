import createTable, { insertProduto } from './Contoller/produto.js'
import express from 'express'

const app = express();
app.use(express.json());

createTable()

app.get('/', function (req, res) {
  res.send('Olá mundo')
})

app.post('/produto', function(req, res) {
  insertProduto(req.body)
  res.json({
    "statuscode": 200
  })
})

app.listen(3000, () => console.log('API Rodando'))