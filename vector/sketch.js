let socket = io();

function setup(){
  createCanvas(windowWidth,windowHeight);
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function draw(){
  background(0);
  noFill();
  stroke(255);
  circle(mouseX,mouseY,60,60);
}

function mousePressed(){
  socket.emit("value", [mouseX/width,mouseY/height]);
}

function mouseDragged(){
  socket.emit("value", [mouseX/width,mouseY/height]);
}