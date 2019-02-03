const express = require('express');
const routes = express.Router();

// Primeira rota
// routes.get('/products', (request, response) => {

//     Product.create({ 
//         title: 'React native',
//         description: 'Build native apps with Reactive',
//         url: "http://github.com/facebook/react-native"
//     });

//     console.log("Console log: Teste");
//     return response.send("<h1>Welcome to the Jungle!!!</h1>");
// });

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;