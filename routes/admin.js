


app.use('/add-product', (req, res, next) => {
    console.log('/add-product called');
    res.send('<html><body><h1>Add Product</h1><form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Submit</button></form></body></html>')
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});