// const http = require('http');
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//* function passing through app.use() will be executed for every incoming request
//# urlencoded since body-parser already included
app.use(express.urlencoded({ extended: true }));


app.use(shopRoutes);
app.use(adminRoutes);

//* 404 handler
app.use((req, res, next) => {
    res.sendStatus(404).send('<h1>Page not found</h1>');
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});