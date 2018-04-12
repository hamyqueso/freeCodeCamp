//import { error } from 'util';

var fs = require('fs');
var path = require('path');
var ext = "." + process.argv[3];
//var arr = [];

function list(callback){
    fs.readdir(process.argv[2], function donereading(err, contents){
        //contents = contents.toString();
        for(var i = 0; i < contents.length; i++){
            if (path.extname(contents[i]) == ext){
                callback(contents[i]);
            }
        }
    })
}

function output(contents){
    console.log(contents);
}

list(output);