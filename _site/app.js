var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write("I am Nyghtwel\n");
  response.write("<h1>Title</h1>");
  response.end('Hello World\n');
  response.write("I come after the end()");

}).listen(1337, '127.0.0.1');
//10.136.30.213
console.log('Server running at http://127.0.0.1:1337/');
