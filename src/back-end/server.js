const http = require('http');
var express = require('express');
const app = express();

const port = 3001;
const getSongs = require('./routes/getSongsRoute')

app.listen(port, () => console.log(`Express server currently running on port ${port}`));


app.get('/hello', function (req, res) {
    res.send("Hello World!");
});

app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

app.use('/', getSongs);