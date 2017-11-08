#!/usr/bin/node

var fs=require('fs');

var dir=process.argv[2];
console.log(fs.readdirSync(dir,function(err){
  if(err){
    console.log(err.message);
    process.exit(1);
  }
}));

