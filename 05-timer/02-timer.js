#!/usr/bin/node
console.log('start...');


var timeID=setInterval(loop,500);
timeID.unref();
function loop(){
  
  console.log("forever");
}
setTimeout(function(){
  console.log('over');
},5000);
