import openDb from '../configDB.js'

export async function createTable(){
  openDb().then(db=>{
    db.exec('CREATE TABLE IF NOT EXISTS produtos ( id INTEGER PRIMARY KEY, nome TEXT, preco TEXT )')
  })
}

export async function selectProduto(req, res){
  openDb().then(db=>{
    db.all('SELECT * FROM produtos')
    .then(produto => res.json(produto))
  })
}

export async function insertProduto(req, res){
  let produto = req.body
  openDb().then(db=>{
    db.run('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [produto.nome, produto.preco])
  })
  res.json ({
    "statusCode": 200
  })
}

export async function updateProduto(req, res){
  let produto = req.body
  openDb().then(db=>{
    db.run('UPDATE produtos SET nome=?, preco=? WHERE id=?', [produto.nome, produto.preco, produto.id])
  })
  res.json ({
    "statusCode": 200
  })
}

export async function deleteProduto(req, res){
  let id = (req.body.id)
  openDb().then(db=>{
    db.run('DELETE FROM produtos WHERE id=?', [id])
    .then(res => res)
  })
  res.json ({
    "statusCode": 200
  })
}