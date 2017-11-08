var items;
get(show);
function get(cb){
  document.getElementById("output").innerHTML="";
  fetch('http://192.168.238.144:8080').then(function(res){
    res.text().then(function(data){
      items=JSON.parse(data);
      cb();
    });
});
}
function show(){
  var str="<ul>\n";
  for(var i=0;i<items.length;i++){
    str+='<li>'+items[i]+"</li>\n";
  }
  str+='</ul>';
  document.getElementById("output").innerHTML=str;
}
function add(){
  var item=document.getElementById('todo').value;
  if(item==='') return;
  items.push(item);
  show();
  fetch('http://192.168.238.144:8080',{method:'POST',body:item});
}
