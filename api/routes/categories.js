const router = require("express").Router()
const Category = require("../models/Category")

/*
Registrando Categoria

Da mesma forma que foi aplicado na api de usuarios
definido a rota "/", ao acessar o mesmo executara a funcao
de criar uma categoria de acordo com o dado da requisicao
*/
router.post("/", async (req, res) => {
  const newCat = new Category(req.body)
  try {
    const savedCat = await newCat.save()
    res.status(200).json(savedCat) 
  } catch (err) {
    res.status(500).json(err)
  }
});

/* 
Pegando Categoria

Apenas uma consulta ao banco de dados
sobre as categorias criadas
*/
router.get("/", async (req, res) => {
    try {
      const cats = await Category.find();
      res.status(200).json(cats)
    } catch (err) {
      res.status(500).json(err)
    }
  })

module.exports = router