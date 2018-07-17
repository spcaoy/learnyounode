var http = require("http");
var fs = require("fs");
var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response){
    response.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(filePath).pipe(response);
});
server.listen(port);