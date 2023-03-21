const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
//Rota
app.get('/', (requisicao, resposta) => {
    resposta.render("index")
})

app.post('/', (requisicao, resposta) => {
    const idade = requisicao.body.idade;
    let faixaetaria = 0

    if (idade >= 0 && idade < 15) {
        console.log("Criança")
        faixaetaria = "Criança"
    } else if (idade >= 15 && idade < 30) {
        console.log("Jovem");
        faixaetaria = "Jovem"
    } else if (idade >= 30 && idade < 60) {
        console.log("Adulto");
        faixaetaria = "Adulto"
    } else if (idade > 60) {
        console.log("Idoso");
        faixaetaria = "Idoso"
    }

    resposta.render("resultado", {idade:faixaetaria})
})

app.get('resultado', (requisicao, respota) => {
    respota.render("resultado")
})

app.listen(3000, () => {console.log('Servidor Inicializado')})