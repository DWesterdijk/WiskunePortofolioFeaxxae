const server = require('http').createServer((req, res)=>{
  res.statusCode = 418;
  res.end("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH");
});



server.listen('8080');
