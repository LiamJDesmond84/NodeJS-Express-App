const express = require('express');

const router = express.Router();


//# Had to block favicon.ico request to stop this from being called.
router.use('/', (req, res, next) => {
    console.log('SECOND middlewar after next()');
    res.send('<h1>Hello from Express!</h1>')
});