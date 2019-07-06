const express = require('express');
const app = express();
const goodreads = require('./goodreads.js');
const port = process.env.PORT || 8000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});   

app.get('/api/booksearch/:search', async (req, res)=>{
    
    let searchKey = req.params.search;
    try {
        const result = await goodreads.bookSearch(searchKey);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    };
});

app.listen(port, function () {
    console.log('server running on port 8000');
});