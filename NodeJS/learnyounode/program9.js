var http = require('http');
var bl = require('bl');
var count = 0;
var urls = process.argv.slice(2);
var urlLength = urls.length;
var results = [];


function printResults(){
    for(var j = 0; j < urlLength; j++){
        console.log(results[j]);
    }
}

function httpGet(index){
    http.get(urls[index], function(response){
        response.pipe(bl(function(err, data){
            if (err) return console.error(err);
            results[index] = data.toString();
            count++;

            if(count === urlLength){
                printResults();
            }
        }))
    })
}

for(i= 0; i < urlLength; i++){
    httpGet(i);
}


/*
var count = 0;
var arrLength = process.argv.length -2;
var urls = [];
var data = [];
var str1 = '';
var str2 = '';
var str3 = '';

while(count < arrLength){
    urls[count] = process.argv[count+2];
    count++;
}

count = 0;

//console.log(urls);
function answer1(address){
    http.get(address, function(response){
        response.setEncoding('utf-8');
        response.on("data", function(response){
            str1+=response;
            //console.log(str1);
        });
        response.on("error", console.error);
        response.on("end", function(){
            console.log(str1);
            count++;
        });
    })
}
answer1(urls[0]);
function answer2(address){
    http.get(address, function(response){
        response.setEncoding('utf-8');
        response.on("data", function(response){
            str2+=response;
            //console.log(str1);
        });
        response.on("error", console.error);
        response.on("end", function(){
            
        });
    })
}
answer2(urls[1]);
function answer3(address){
    http.get(address, function(response){
        response.setEncoding('utf-8');
        response.on("data", function(response){
            str3+=response;
            //console.log(str1);
        });
        response.on("error", console.error);
        response.on("end", function(){
            if(count == 2){
                console.log(str3);
                //count++;
            }
        });
    })
}



answer3(urls[2]); */
//console.log(data[0]);
/*
data.forEach(function(response){
    console.log(response)
});
*/
/*
for(count; count < arrLength;){
    http.get(process.argv[count], function(response){
        response.setEncoding('utf-8');
        response.on("data", console.log);
        response.on("error", console.error);
        response.on("end", function(){
            count++;})
    })
}
*/