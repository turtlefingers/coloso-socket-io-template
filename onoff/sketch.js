let socket = io();

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function mousePressed(){
  background(255);
  socket.emit("value", [1]);
}

function mouseReleased(){
  background(0);
  socket.emit("value", [0]);
}