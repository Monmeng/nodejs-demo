#!/usr/bin/node

var http=require('http');
var items=[];

http.createServer(function(req,res){

  console.log(req.headers);
  console.log('');

  switch(req.method){

    case 'GET':
      get(res);
      break;
    case 'POST':
      insert(req,res);
      break;
    case 'DELETE':
      del(req,res);
      break;
    case 'PUT':
      change(req,res);
      break;
    default:
      break;
  }

}).listen(8080);

function get(res){

  var body=JSON.stringify(items);
  
  res.setHeader('Content-Length',Buffer.byteLength(body));
  res.setHeader('Content-Type','text-plain; charset="utf-8"');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.end(body);
}

function insert(req,res){
  var item='';
  req.on('data',function(data){
    item+=data;
  });
  req.on('end',function(){
    items.push(item);
  });
  res.end();
}
function del(req,res){
  var arg=req.url.split('/');
  if(arg[1]===''){
    items=[];
  }

  var i=parseInt(arg[1]);
  if(!items[i]){
    res.statusCode=404;
    res.end('Not Found!');
  }else{
    items.splice(i,1);
    res.end('Delete OK');
  }
}

function change(req,res){
  var arg=req.url.split('/');
  if(arg[1]===""){
    items=[];
  }

  var item='';
  req.on('data',function(chunk){item+=chunk});
  req.on('end',function(){
    var i=parseInt(arg[1]);

    if(!items[i]){
      res.statusCode=404;
      res.end('Not Found!');
    }else{
      items[i]=item;
      res.end('Change OK');
    }
  });
}
