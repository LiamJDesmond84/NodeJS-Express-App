const express = require('express');

const path = require('path');

const router = express.Router();


//# Had to block favicon.ico request to stop this from being called.
router.get('/', (req, res, next) => {
    console.log('SHOP JS');
    // res.send('<h1>Hello from Express!</h1>')
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
});

module.exports = router;