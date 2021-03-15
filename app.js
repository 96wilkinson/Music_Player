const http = require('http');
const express = require("express");
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
const getSongsRoute = require("./routes/getSongsRoute.js")


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

app.get("/getSongs", getSongsRoute);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




