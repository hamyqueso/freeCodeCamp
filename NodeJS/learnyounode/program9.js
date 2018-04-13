var http = require('http');
var count = 2;
var arrLength = process.argv.length;

for(count; count < arrLength;){
    http.get(process.argv[count], function(response){
        response.setEncoding('utf-8');
        response.on("data", console.log);
        response.on("error", console.error);
        response.on("end", function(){
            count++;})
    })
}