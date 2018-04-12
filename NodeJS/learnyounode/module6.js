var fs = require('fs');
var path = require('path');

module.exports = function list(folder, ext, callback){
    fs.readdir(folder, function (err, data){
        if(err){
            return callback(err);
        }
        data = data.filter(function (data){
            return path.extname(data) === "."+ext;
        })
        callback(null, data);
    })
}