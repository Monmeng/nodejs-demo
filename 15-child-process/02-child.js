#!/usr/bin/node

var cp=require('child_process');
console.log('I am child process.PID:',process.pid);

var timer=global.setInterval(function(){
  console.log('time:',Date.now());
},2000);
global.setTimeout(function(){
  global.clearInterval(timer);
  console.log('16 seconds is over!');
},16000);
