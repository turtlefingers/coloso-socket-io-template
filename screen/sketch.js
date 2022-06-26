let socket = io();
let v1 = 0;


function setup(){
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
  background(v1 * 255);
}

socket.on("value",receiveValue);

function receiveValue(value){
  v1 = value[0];
}