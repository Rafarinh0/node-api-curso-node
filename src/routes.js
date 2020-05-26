const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);


//primeiro parametro é o que vem depois da barra lá no localhost
//o segundo é uma função que recebe dois parâmetros: req e res
//o req simboliza a requisição que eu estou fazendo ao servidor, e vai conter detalhes dessa informação
//o res tem a ver com a resposta que eu vou dar para a requisição
//back-end, no geral, é fazer uma requisição e o servidor devolvendo uma resposta
module.exports = routes;