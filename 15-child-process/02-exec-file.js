#!/usr/bin/node

var cp=require('child_process');
console.log("I am father process.PID:",process.pid);

console.log('cat 02-child.js\n');

cp.execFile('./02-child.js',function(err,stdout,stderr){
  if(err) console.error(err);
  console.log(stdout);
});
