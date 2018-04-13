var net = require('net');
var date = new Date();

var year = date.getFullYear().toString();
var month = formatNumber(date.getMonth()+1);
var day = formatNumber(date.getDate());
var hour = formatNumber(date.getHours());
var min = formatNumber(date.getMinutes());

var timeStamp = year + "-" + month + "-"+ day + " " + hour+ ":" +min + "\n";

var server = net.createServer(function (socket){
   
    socket.end(timeStamp);
    
})

server.listen(process.argv[2]);

function formatNumber(num){
    if (num < 10){
        return '0' + num.toString();
    } else return num.toString();
}

/*
function listener(socket){
    console.log(socket.listen());
} 
*/