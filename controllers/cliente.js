var express = require('express')
var router = express.Router()
router.post('/', (req, res) => {
    // db.collection('dados', (erro, colecao) => { // Acessando a Coleção "dados"
    //     console.log(colecao)
    //     colecao.insertOne(req.body) // Inserindo um dado na collection "dados"
    // })
    console.log(req.body)
    db.collection('cliente').insertOne(req.body, (err, result) => {
        if (err) {
			return res.send(err);
        }
		let cliente = result.ops[0];
		console.log('collection("cliente").save => cliente', cliente);
		res.status(200).send(cliente);
	});
})
router.get('/', (req, res) => {
	console.log('query',req.query)
	req.query.nomeUsuario = new RegExp(req.query.nomeUsuario, 'i')
    db.collection('cliente')
		.find(req.query)
		.toArray((err, result) => {
			if (err) {
				return res.send(err);
			}
			res.send(200, result);
		});
})

module.exports = router;