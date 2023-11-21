const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

const adminData = require('./admin');



//# Had to block favicon.ico request to stop this from being called.
router.get('/', (req, res, next) => {

    console.log(adminData.products);

    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

exports.routes = router;