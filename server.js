const express = require('express');

const app = express();

app.get('/', (request, response) => {
    console.log("Console log: Teste");
    response.send("<h1>Welcome to the Jungle!!!</h1>");
});

app.listen(3001);