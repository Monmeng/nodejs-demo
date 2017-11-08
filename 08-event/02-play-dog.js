#!/usr/bin/node
var Dog=require('./02-dog');

var taidi=new Dog('taidi');
var jingba=new Dog('jingba');
var energy=8;

jingba.on('bark',onBark);
taidi.on('bark',onBark);

function onBark(){
  console.log('this.name'+' barked!');
  energy--;

  if(energy<=0){
     this.stop();
     console.log(this.name+' is tired!');
  }
}
