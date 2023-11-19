const http = require('http');
const express = require('express');

const app = express();


//# function passing through app.use() will be executed for every incoming request
app.use((req, res, next) => {
    console.log('middleware');
    next(); // Allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('SECOND middlewar after next()');
    // ...
})


const server = http.createServer(app);

server.listen(3000);