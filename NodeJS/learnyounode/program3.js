var fs = require('fs');
var path = process.argv[2];

var output = fs.readFileSync(path);

output = output.toString().split('\n');

console.log(output.length - 1);