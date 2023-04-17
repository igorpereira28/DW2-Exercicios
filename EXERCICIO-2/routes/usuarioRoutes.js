const express = require('express'),
      router = express.Router()

const usuarioController = require("../controller/usuarioController")

router.get("/", usuarioController.listar);
router.post("/adicionar", usuarioController.adicionar)
router.get("/:id", usuarioController.listarUsuario)
router.delete("/:id", usuarioController.deletar)
router.put("/atualizar", usuarioController.atualizar)

module.exports = router