let socket = io();

function setup(){
  createCanvas(windowWidth,windowHeight);
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function draw(){
  background(255,0,0);
  fill(255);
  circle(mouseX,mouseY,50,50);
}

function mouseDragged(){
  socket.emit("pos", [mouseX/width,mouseY/height]);
}