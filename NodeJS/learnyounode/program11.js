var http = require('http');
var fs = require('fs');
var path = process.argv[3];
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res){
    var src = fs.createReadStream(path);
    src.pipe(res);
    //res.end();
})

server.listen(port);