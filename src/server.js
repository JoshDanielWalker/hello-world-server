const http = require('http');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
  } else if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

function start(port, host) {
  return new Promise((resolve) => {
    server.listen(port || PORT, host || HOST, () => {
      console.log(`Server running at http://${host || HOST}:${port || PORT}/`);
      resolve(server);
    });
  });
}

if (require.main === module) {
  start();
}

module.exports = { server, start };
