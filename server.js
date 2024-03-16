const http = require('node:http');

const hostname = "localhost";
const port = 8900;

const server = http.createServer((req, res) => {
    res.end("My Name is Medinat");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });