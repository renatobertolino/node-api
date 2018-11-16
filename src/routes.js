const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.products);

routes.get('/products/:id', ProductController.getProductById);

routes.post('/products', ProductController.createProduct);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.deleteProduct);

module.exports = routes;