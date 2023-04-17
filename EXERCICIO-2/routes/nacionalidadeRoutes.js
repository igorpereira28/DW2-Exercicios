const express = require('express'),
      routerNacionalidade = express.Router()

const nacionalidadeRouter = require("../controller/nacionalidadeController")

routerNacionalidade.get("/", nacionalidadeRouter.listar);
routerNacionalidade.post("/adicionar", nacionalidadeRouter.adicionar)
routerNacionalidade.get("/:id", nacionalidadeRouter.listarNacionalidade)
routerNacionalidade.delete("/:id", nacionalidadeRouter.deletar)
routerNacionalidade.put("/atualizar", nacionalidadeRouter.atualizar)

module.exports = routerNacionalidade