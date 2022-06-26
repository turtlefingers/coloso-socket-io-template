let socket = io();
let v1 = 0;

let h = 0;
let targetH = 0;

function setup() {
  createCanvas(400, 400);
  
  cursor(HAND);
}

function draw() {
  let up = 0;
  if(mouseIsPressed){
     up = 10;
  }
  
  h = lerp(h,targetH+up,0.2);
  
  
  background(220);
  
  
  flower(200,300);
}

function flower(x,y){
  push();
    translate(x,y);
    strokeWeight(15);
    line(0,0,0,-h);

    push();
      translate(0,-h);
      strokeWeight(5);
  
      if(h>150){
        ellipse(0,-35,40,40);
        ellipse(30,-10,40,40);
        ellipse(-30,-10,40,40);
        ellipse(20,20,40,40);
        ellipse(-20,20,40,40);
      }
      if(h>60){
        ellipse(0,0,60,60);
      }
      
    pop();



    // h == v, h > v, h >= v, h < v, h <= v
    if(h >= 110){

      push();
        translate(0,-h + 70);
        strokeWeight(5);
        ellipse(-25,0,50,20);
        ellipse(25,0,50,20);
      pop();

    }
  
  pop();
  
}

socket.on("value",receiveValue);

function receiveValue(value){
  v1 = value[0];
  if(v1 == 1){
    targetH = targetH + 30;
    if(targetH > 200){
      targetH = 0;
    }
  }
}