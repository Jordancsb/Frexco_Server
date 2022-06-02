import { Router } from "express"
import { insertProduto, updateProduto, selectProduto } from './Contoller/produto.js'

const router = Router();

router.get('/', (req, res) => {
  res.json ({
    "statusCode" : 200,
    "msg": "API Rodando"
  })
})

router.get('/produtos', selectProduto)
router.post('/produtos', insertProduto)
router.put('/produtos', updateProduto)

export default router