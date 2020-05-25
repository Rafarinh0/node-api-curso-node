const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

// Iniciando o Banco de Dados
mongoose.connect('mongodb://192.168.99.100:27017:27017/nodeapi', 
{useNewUrlParser: true});

requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira Rota
app.get('/', (req,res)=>{
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });

   return res.send('Hello Rocketseat!');
});
//primeiro parametro é o que vem depois da barra lá no localhost
//o segundo é uma função que recebe dois parâmetros: req e res
//o req simboliza a requisição que eu estou fazendo ao servidor, e vai conter detalhes dessa informação
//o res tem a ver com a resposta que eu vou dar para a requisição
//back-end, no geral, é fazer uma requisição e o servidor devolvendo uma resposta
app.listen(3001);