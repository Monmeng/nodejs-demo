function makeload(){
  for(var i=0;i<100000000000;i++);

}
function logsomething(){
  console.log('something');
}
setInterval(makeload,2000);
setInterval(logsomething,0);
