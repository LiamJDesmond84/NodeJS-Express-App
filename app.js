// const http = require('http');
const express = require('express');

const app = express();


//# function passing through app.use() will be executed for every incoming request
// app.use((req, res, next) => {
//     console.log('middleware');
//# next()- Allows the request to continue to the next middleware in line
//     next();
// })


app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
})


app.use('/add-product', (req, res, next) => {
    console.log('/add-product called');
    res.send('<h1>Add Product</h1>')
})

//* Had to block favicon.ico request to stop this from being called.
app.use('/', (req, res, next) => {
    console.log('SECOND middlewar after next()');
    res.send('<h1>YO</h1>')
})


// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});