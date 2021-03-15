const http = require('http');
const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'Music_Player'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});