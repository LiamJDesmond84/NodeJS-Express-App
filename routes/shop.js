

//# Had to block favicon.ico request to stop this from being called.
app.use('/', (req, res, next) => {
    console.log('SECOND middlewar after next()');
    res.send('<h1>Hello from Express!</h1>')
});