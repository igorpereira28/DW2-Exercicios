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
    const nota1 = requisicao.body.nota1;
    const nota2 = requisicao.body.nota2;
    const nota3 = requisicao.body.nota3;
    calculo = ((1 * nota1) + (2 * nota2) + (3 * nota3)) / 6
    let media = 0

    if (calculo >= 9 && calculo < 11) {
        console.log("A")
        media = "A"
    } else if (calculo >= 8 && calculo < 10) {
        console.log("B");
        media = "B"
    } else if (calculo >= 7 && calculo < 9) {
        console.log("C");
        media = "C"
    } else if (calculo >= 6 && calculo < 8) {
        console.log("D");
        media = "D"
    } else if (calculo >= 5 && calculo < 7) {
        console.log("E")
        media = "E"
    } else {
        console.log("F");
        media = "F"
    }

    resposta.render("resultado", {media:media, calculo:calculo})
})

app.get('resultado', (requisicao, respota) => {
    respota.render("resultado")
})

app.listen(3000, () => {console.log('Servidor Inicializado')})