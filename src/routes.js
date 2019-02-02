const express = require('express');
const routes = express.Router();

// Primeira rota
routes.get('/products', (request, response) => {

    // Product.create({ 
    //     title: 'React native',
    //     description: 'Build native apps with Reactive',
    //     url: "http://github.com/facebook/react-native"
    // });

    console.log("Console log: Teste");
    return response.send("<h1>Welcome to the Jungle!!!</h1>");
});

module.exports = routes;