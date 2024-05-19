const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 3050;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, null, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
