const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());//Permite que eu envie dados para minha aplicação no formato .json()

// Iniciando o Banco de Dados
mongoose.connect('mongodb://192.168.99.100:27017:27017/nodeapi', 
{useNewUrlParser: true});

requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));

//O use é como se fosse um coringa. Ele vai receber todo tipo de requisição, ou seja, não
//só get, put ou delete, mas todo tipo. Toda vez que eu receber uma requisição a partir da
//rota api, eu vou mandar para o meu arquivo ./src/routes

app.listen(3001);