const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true }
);
//require('./src/models/Product');
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (request, response) => {

    Product.create({ 
        title: 'React native',
        description: 'Build native apps with Reactive',
        url: "http://github.com/facebook/react-native"
    });

    console.log("Console log: Teste");
    return response.send("<h1>Welcome to the Jungle!!!</h1>");
});

app.listen(3001);