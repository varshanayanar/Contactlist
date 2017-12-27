var http=require('http');

var server=http.createServer(function (req,res)
{
  res.writeHead(200,{'Content-Type':'text/Plain'});
  res.end('hey');

});

server.listen(3000,'127.0.0.1');
console.log('now listening port 3000');
