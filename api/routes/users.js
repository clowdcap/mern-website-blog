/*
Agora, sera feito o gerenciamento dos bancos de dados com as rotas
API - definindo rotas para certas areas a serem acessadas pelo banco de dados
Router - Traz a funcao de rotas http

User, Post, Caregory - chama os Schemas "tabelas" e com essas estruturas de dados
criadas, podemos chamalas para essa aplicação

*/

const router = require("express").Router()
const User = require("../models/User")
const Post = require("../models/Post")
const bcrypt = require("bcrypt")

// ATUALIZAR USER
/*
Definir rotas para Update

*/
router.put("/:id", async (req, res) => {
    if (req.body._id === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        )
        res.status(200).json(updatedUser)
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.status(401).json("Voce so pode atualizar a sua conta !")
    }
  })

// DELETAR USER
router.delete("/:id", async (req, res) => {
if (req.body.userId === req.params.id) {
  try {
    const user = await User.findById(req.params.id)
    try {
        await Post.deleteMany({ username: user.username })
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User foi deletado com sucesso...")
    } catch (err) {
        res.status(500).json(err)
    }
  } catch (err) {
      res.status(404).json("User nao encontrado!")
  }
} else {
    res.status(401).json("Voce so pode deletar a sua conta !")
}
})

// PEGAR USER
router.get("/:id", async (req, res) => {
try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(others)
} catch (err) {
    res.status(500).json(err)
}
})

module.exports = router