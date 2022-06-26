let socket = io();

let buttonX;
let buttonY;
let buttonRadius;
let buttonH;

let sliderStartX;
let sliderEndX;
let sliderY;
let handleX;
let handleRadius;


function setup() {
  createCanvas(windowWidth, windowHeight);
  init();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  init();
}

function init(){
  buttonX = width * 0.5;
  buttonY = height * 0.5 - 100;
  buttonRadius = 50;
  buttonH = 10;
  
  sliderStartX = width *0.5 - 150;
  sliderEndX = width * 0.5 + 150;
  sliderY = height * 0.5 + 100;
  handleX = sliderStartX;
  handleRadius = 20;
}

function draw() {
  background("orange");
  
  button();
  slider();
}

function mousePressed(){
  // button Pressed
  if(dist(mouseX,mouseY,buttonX,buttonY-buttonH)<buttonRadius){
    socket.emit("value",[1]);
  }
  
  // slider Pressed
  if(mouseX > sliderStartX && mouseX < sliderEndX
    && mouseY > sliderY - handleRadius
    && mouseY < sliderY + handleRadius){
     handleX = mouseX;
    let s
    socket.emit("value",[0,]);
  }
}

function mouseDragged(){
  if(mouseX > sliderStartX && mouseX < sliderEndX
    && mouseY > sliderY - handleRadius
    && mouseY < sliderY + handleRadius){
     handleX = mouseX;
  }
}

function button(){
  let up = 10;
  if(dist(mouseX,mouseY,buttonX,buttonY-buttonH)<buttonRadius){
     up = 7;
    if(mouseIsPressed){
      up = 2;
    }
  }
  
  buttonH = lerp(buttonH,up,0.5);
  
  noStroke();
  fill(127);
  ellipse(buttonX,buttonY,buttonRadius*2,buttonRadius*2);
  fill(230);
  ellipse(buttonX,buttonY-buttonH,buttonRadius*2,buttonRadius*2);
  fill(255);
  ellipse(buttonX,buttonY-buttonH,buttonRadius*2-15,buttonRadius*2-15);
}

function slider(){
  let radius = 20;
  
  if(dist(mouseX,mouseY,handleX,sliderY)<handleRadius){
     radius = 22;
    if(mouseIsPressed){
      radius = 25;
     }
  }
  
  handleRadius = lerp(handleRadius,radius,0.5);
  
  stroke(255);
  strokeWeight(10);
  line(sliderStartX,sliderY,sliderEndX,sliderY);
  fill("orange");
  ellipse(handleX,sliderY,handleRadius*2,handleRadius*2);

}