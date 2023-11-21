// const http = require('http');
const express = require('express');

const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//* function passing through app.use() will be executed for every incoming request
//# urlencoded since body-parser already included
app.use(express.urlencoded({ extended: true }));


app.use('/admin', adminRoutes);
app.use(shopRoutes);

//* 404 handler - Catch-all route
app.use('/',(req, res, next) => {
    // res.status(404).send('<h1>Page not found!!!</h1>');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});