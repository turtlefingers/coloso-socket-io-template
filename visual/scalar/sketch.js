let socket = io();
let v1 = 0;
let move = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
  move += v1;
  let y = sin(move) * 30;
  
  tra
  
  // 배경 검은색 + 반투명
  background(0);
  
  ellipse();
  
}

socket.on("value",receiveValue);

function receiveValue(value){
  v1 = value[0];
}