const express = require('express')
const app = express()
const mongo = require('mongodb')
const mongoClient = mongo.MongoClient

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  });

app.use(express.json())

app.post('/cadastrar', (req, res) => {
    mongoClient.connect('mongoDB://localhost:27017/', (err, client) => {
    let db = client.db('API')   // Acessando o Banco de dados API
    db.collection('dados', (erro, colecao) => { // Acessando a Coleção "dados"
        console.log(req.body)
        colecao.insertOne(req.body) // Inserindo um dado na collection "dados"
    })
})
})

app.listen(3000)

// mongo db
// const mongo = require('mongodb')
// const mongoClient = mongo.MongoClient

// mongoClient.connect('mongoDB://localhost:27017/', (err, client) => {
//     let db = client.db('API')   // Acessando o Banco de dados API
//     db.collection('dados', (erro, colecao) => { // Acessando a Coleção "dados"
//         colecao.insertOne({nome: 'Joana', idade: 25}) // Inserindo um dado na collection "dados"
//     })
// })