let socket = io();

function setup(){
  createCanvas(windowWidth,windowHeight);
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function draw(){
  background(mouseY/height * 255);
  
  noFill();
  stroke(255);
  circle(mouseX,mouseY,60,60);
}

function mousePressed(){
  socket.emit("value", [mouseY/height]);
}

function mouseDragged(){
  socket.emit("value", [mouseY/height]);
}