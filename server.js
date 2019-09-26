const express = require('express')
const app = express()
const clienteCtrl = require('./controllers/cliente')
const mongo = require('mongodb')
const cors = require('cors')
const mongoClient = mongo.MongoClient

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   });

app.use(
    cors({
        credentials: true,
        origin: true
    })
)
app.options('*', cors())
app.use(express.json())
const uri = 'mongodb://127.0.0.1:27017/API';
mongoClient.connect(uri, (err, client) => {
	if (err) return console.log(err);
	db = client.db('API');

	app.use('/api/v1/cliente', clienteCtrl);

	app.listen(3000, function() {
		console.log('server running on port 3000', '');
	});
});

// mongo db
// const mongo = require('mongodb')
// const mongoClient = mongo.MongoClient

// mongoClient.connect('mongoDB://localhost:27017/', (err, client) => {
//     let db = client.db('API')   // Acessando o Banco de dados API
//     db.collection('dados', (erro, colecao) => { // Acessando a Coleção "dados"
//         colecao.insertOne({nome: 'Joana', idade: 25}) // Inserindo um dado na collection "dados"
//     })
// })