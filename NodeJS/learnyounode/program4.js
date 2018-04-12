var fs = require('fs');
var result = 0;

function lines(callback){
        fs.readFile(process.argv[2], function doneReading(err, contents){
            result = contents.toString().split('\n').length - 1;
            callback();
        })
}

function outputNumber(){
    console.log(result);
}

lines(outputNumber);