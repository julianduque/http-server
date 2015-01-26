var http = require('http');

http.createServer(function (req, res) {
  res.end("hello world :) - this is it");
}).listen(8080);
