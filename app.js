// const http = require('http');
const express = require('express');

const path = require('path');

const rootDir = require('./util/path');

const app = express();


const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

//* function passing through app.use() will be executed for every incoming request

//# urlencoded since body-parser already included
app.use(express.urlencoded({ extended: true }));
// For CSS imports
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


app.use('/admin', adminData.routes);
app.use(shopRoutes);

//* 404 handler - Catch-all route
app.use('/', (req, res, next) => {

    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

