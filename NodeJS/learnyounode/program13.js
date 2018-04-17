var http = require('http');
var port = process.argv[2];
var url = require('url');


function addZero(num){
    if (num < 10){
        num = '0' + num.toString();
    }
}

function timeStamp(startTime){
    return Date.parse(startTime);
}

function time(startTime){
    var date = new Date(timeStamp(startTime));
    var x = new Object;

    x.hour = date.getHours();
    x.minute = date.getMinutes();
    x.second = date.getSeconds();

    return x;
}

function unixTime(startTime){
    return {unixtime: Date.parse(startTime)}
}

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    var startTime = urlObj.query.iso;
    var result;

    if (pathname === '/api/parsetime') {
        result = time(startTime);
    } else if (pathname === '/api/unixtime') {
        result = unixTime(startTime);
    }

    if(result){
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end()
    }

    /*if ( == GET){
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    if (path === '/api/parsetime') {
        res.end(JSON.stringify(time()));
    } else if (path === '/api/unixtime') {
        res.end(JSON.stringify(unixTime()));
    }
}*/
})

server.listen(port);