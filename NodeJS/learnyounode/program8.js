var http = require('http');
var url = process.argv[2];
var total = 0;
var str = "";

http.get(url, function(response){
    response.setEncoding('utf-8');
    response.on("data", function (response){
        total += response.length;
        str += response;
    })
    response.on("error", console.error);
    response.on("end", function() {
        console.log(total);
        console.log(str);
    })
})

