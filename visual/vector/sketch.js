let socket = io();
let x = 0, y = 0, px = 0, py = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
  
  // 배경 검은색 + 반투명
  background(0,50);
  
  line(x,y,px,py);
}

socket.on("value",receiveValue);

function receiveValue(value){
  x = value[0];
}