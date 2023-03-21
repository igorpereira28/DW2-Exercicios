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
    const nome = requisicao.body.nome;
    const sobrenome = requisicao.body.sobrenome;
    const idade = requisicao.body.idade;
    const pais = requisicao.body.pais;

    resposta.render("editor", {nome:nome, sobrenome:sobrenome, idade:idade, pais:pais})
})

app.post('editor', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const sobrenome = requisicao.body.sobrenome;
    const idade = requisicao.body.idade;
    const pais = requisicao.body.pais;

    resposta.render("visualizar", {nome:nome, sobrenome:sobrenome, idade:idade, pais:pais})
})

app.get('resultado', (requisicao, respota) => {
    respota.render("resultado")
})

app.listen(3000, () => {console.log('Servidor Inicializado')})