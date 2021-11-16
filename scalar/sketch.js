let socket = io();

function setup(){
  createCanvas(windowWidth,windowHeight);
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function draw(){
  background(0);
  rect(0,0,width,mouseY);
}

function mousePressed(){
  socket.emit("value", [mouseY/height]);
}

function mouseDragged(){
  socket.emit("value", [mouseY/height]);
}