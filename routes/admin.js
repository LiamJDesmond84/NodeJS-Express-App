const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');

const products = [];


// - /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});



// - /admin/add-product => POST
router.post('/add-product', (req, res, next) => {

    // console.log(req.body);

    products.push(req.body); 
    
    for(x in products) {
        console.log(products[x]);
    }

    res.redirect('/');
});


module.exports = router;