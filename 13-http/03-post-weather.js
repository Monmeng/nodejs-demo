#!/usr/bin/node

var http=require('http');

const { URL  }=require('url');

var city=process.argv[2] || "石家庄";
var addr='http://api.jisuapi.com/weather/query?appkey=d4afb00114742b00&city='+city;
var newURL=new URL(addr);
var options=newURL;
options.method='POST';
var req=http.request(options,function(res){
  var result='';
  res.on('data',function(data){
    result+=data.toString('utf8');
  });

  res.on('end',function(){


    var weather=JSON.parse(result);
    console.log(weather);
  });
}).on('error',function(err){
  console.log(err.message);
});
req.end();
