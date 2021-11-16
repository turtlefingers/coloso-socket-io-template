let socket = io();
let v1 = 0;
let speed = 0.5;
let theta = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
  theta += v1;
  let move1 = sin(theta) * 30;
  let move2 = sin(theta + PI*0.5) * 30;
  let move3 = sin(theta + PI*1) * 30;
  let move4 = sin(theta + PI*1.5) * 30;
  
  rectMode(CENTER);
  
  translate(width/2, height/2);
  
  // 배경 검은색 + 반투명
  background(0);
  
  // 왼다리
  rect(-20,80+move2,30,50);
  
  // 오른다리
  rect(20,80+move4,30,50);
  
  // 몸
  ellipse(0,move1*0.8,150,150);
  
  // 머리
  ellipse(0,-100 + move1*0.5,50,50);
  
  // 머리
  ellipse(-50,0 + move4,30,30);
  
  ellipse(50,0 + move2,30,30);
  
}

socket.on("value",receiveValue);

function receiveValue(value){
  v1 = value[0] * speed;
}