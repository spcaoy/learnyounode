var http = require("http");
var port = Number(process.argv[2]);

var server = http.createServer(function (request, response) {
    if (request.method !== "POST") {
        return request.end("should send POST");
    }

    request.on('data', function(chunk){
        response.write(chunk.toString().toUpperCase());
    });

    request.on('end', function(){
        response.end();
    })

});
server.listen(port);