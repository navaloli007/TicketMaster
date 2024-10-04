const http = require('http');

const hostname = '127.0.0.1'; // Localhost
const port = 3000; // Port number

const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code 200 OK
    res.setHeader('Content-Type', 'text/plain'); // Content type
    res.end('Welcome to TicketMaster\n'); // Response body
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
