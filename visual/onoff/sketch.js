let socket = io();
let v1 = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
  background(0,10);
  
  rectMode(CENTER);
  
  fill(255);
  ellipse(width/2,height/2,200,200);
  
  ellipse(width/2,height/2,200,200);
}

socket.on("value",receiveValue);

function receiveValue(value){
  v1 = value[0];
}