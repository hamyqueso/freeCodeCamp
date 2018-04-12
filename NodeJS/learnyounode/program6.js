var list = require('./module6.js');
var folder = process.argv[2];
var ext = process.argv[3];

function output(num){

    console.log(num);
}

list(folder, ext, function(err, data){
    if (err) return console.error('Error:', err);

    data.forEach(function(val){
        console.log(val);
    })

});