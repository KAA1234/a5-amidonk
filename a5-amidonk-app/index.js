
const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("This app is using express.");
});

app.listen(PORT, () =>  {
  console.log(`Server listening on port ${PORT}...`);
});

/* const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});  */