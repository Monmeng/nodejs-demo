#!/usr/bin/node

var http=require('https');
//var url=require('url');
const{URL}=require('url');
var user=process.argv[2]||'wangding';
var addr='https://api.github.com/search/repositories?q=user:'+user;
var newURL=new URL(addr);

//var options=url.parse(addr);
var options=newURL;
options.headers={'User-Agent':'03-get-repos.js'};
http.get(options,function(res){

  var result='';
  res.on('data',function(data){
    result+=data.toString('utf8');
  });

  res.on('end',function(){
    var message=JSON.parse(result);
    for(var i=0;i<message.total_count;i++){
      console.log(message.items[i].name);
    }
  });
}).on('error',function(err){
  console.log(err.message);
});
