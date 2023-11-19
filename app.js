const http = require('http');
const express = require('express');

const app = express();


//# function passing through app.use() will be executed for every incoming request
app.use((req, res, next) => {
    console.log('middleware');
    next();
})

app.use((req, res, next) => {
    console.log('middlewar 2');
})


const server = http.createServer(app);

server.listen(3000);