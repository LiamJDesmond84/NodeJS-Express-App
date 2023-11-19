const http = require('http');
const express = require('express');

const app = express();


//# function passing through app.use() will be executed for every incoming request
app.use((req, res, next) => {})


const server = http.createServer(app);

server.listen(3000);