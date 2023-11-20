// const http = require('http');
const express = require('express');
// const bodyParser = requre('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


//* function passing through app.use() will be executed for every incoming request
// app.use((req, res, next) => {
//     console.log('middleware');
//* next()- Allows the request to continue to the next middleware in line
//     next();
// })



//# urlencoded since body-parser already included
app.use(express.urlencoded({ extended: true }));

// //* Will run for every request because '/'
// app.use('/', (req, res, next) => {
//     console.log('This always runs');
//     next();
// });










// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});