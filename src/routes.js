const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

//O post é usado quando eu chamo uma rota que vai criar alguma coisa
module.exports = routes;