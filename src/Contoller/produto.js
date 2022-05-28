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