// Create web server
// run: node comments.js
// open browser: http://localhost:8080

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/api/comments' && req.method === 'POST') {
    var body = '';

    req.on('data', function (chunk) {
      body += chunk;
    });

    req.on('end', function () {
      console.log('POSTed: ' + body);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(body);
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
}).listen(8080);

console.log('Server running at http://localhost:8080/');