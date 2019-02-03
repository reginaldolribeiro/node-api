const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();
app.use(express.json());

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true }
);
require('./src/models/Product');

const Product = mongoose.model('Product');


// Primeira rota
app.get('/', (request, response) => {
    Product.create({ 
        title: 'Java',
        description: 'Java',
        url: "www.java.com"
    });
    console.log("Console log: Teste");
    return response.send("<h1>Welcome to the Jungle!!!</h1>");
});

app.get('/products', async (req, res) => {
    const products = await Product.find();
    return res.json(products);
});

app.post('/products', async (req, res) => {
    console.log('Criando produto...');
    const product = await Product.create(req.body);
    console.log('Produto criado!');
    return res.json(product);
});

app.listen(3001);