import openDb from '../configDB.js'

export default async function createTable(){
  openDb().then(db=>{
    db.exec('CREATE TABLE IF NOT EXISTS produto ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )')
  })
}

export async function insertProduto(produto){
  openDb().then(db=>{
    db.run('INSERT INTO produto (nome, idade) VALUES (?, ?)', [produto.nome, produto.idade])
  })
}

export async function updateProduto(produto){
  openDb().then(db=>{
    db.run('UPDATE produto SET nome=?, idade=? WHERE id=?', [produto.nome, produto.idade, produto.id])
  })
}

export async function selectProdutos(){
  return openDb().then(db=>{
    return db.all('SELECT * FROM produto')
    .then(res => res)
  })
}

export async function selectProduto(id){
  return openDb().then(db=>{
    return db.get('SELECT * FROM produto WHERE id=?', [id])
    .then(res => res)
  })
}

export async function deleteProduto(id){
  return openDb().then(db=>{
    return db.get('DELETE FROM produto WHERE id=?', [id])
    .then(res => res)
  })
}

