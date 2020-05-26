const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

//O post é usado quando eu chamo uma rota que vai criar alguma coisa
module.exports = routes;