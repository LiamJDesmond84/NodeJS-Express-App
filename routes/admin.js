const express = require('express');

const router = express.Router();



router.get('/add-product', (req, res, next) => {
    console.log('/add-product called');
    res.send('<html><body><h1>Add Product</h1><form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form></body></html>')
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;