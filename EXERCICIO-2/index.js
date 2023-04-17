const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//Rotas
const usuario = require("./routes/usuarioRoutes")
const nacionalidade = require("./routes/nacionalidadeRoutes")

//Body Parse
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.use("/usuario", usuario)

app.use("/nacionalidade", nacionalidade)


const port = 3000;
const url = "http://localhost:"
app.listen(port, () => {
    console.log("Rodando na porta: " + url + port)
})