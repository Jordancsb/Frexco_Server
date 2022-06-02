import express from 'express'
import fs from 'fs'
import https from 'https'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createTable, deleteProduto, selectProduto } from './Contoller/produto.js'

createTable()

const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())

import router from './routes.js'
app.use(router)

app.delete('/produtos/:id', async function (req, res) {
  let produtos = await deleteProduto(req.body.id)
  res.json(produtos)
})

app.get('/:id', async function (res, req) {
  let produtos = await selectProduto(req.body.id)
  res.json(produtos)
})

app.listen(8000, () => console.log('API Rodando'))

https.createServer({
  cert: fs.readFileSync('src/SSL/code.crt'),
  key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, () => console.log('Teste certificado https'))
