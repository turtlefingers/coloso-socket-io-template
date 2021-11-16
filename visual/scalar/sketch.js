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
  theta += v1 * speed;
  let move1 = sin(theta);
  let move2 = sin(theta + PI*0.5);
  let move3 = sin(theta + PI*1)
  let move4 = sin(theta + PI*1.5);
  
  // 사각형 위치기준을 중앙으로
  rectMode(CENTER);
  
  
  // 가운데로 중심축 이동
  translate(width/2, v1*height);
  
  // 배경 검은색
  background(0);
  
  // 왼다리
  rect(-20,80+move2*30,30,50);
  
  // 오른다리
  rect(20,80+move4*30,30,50);
  
  // 몸
  ellipse(0,move1*24,150,150);
  
  // 머리
  ellipse(0,-100 + move1*15,70,70);
  
  // 왼팔
  ellipse(-50,0 + move4*30,30,30);
  
  // 오른팔
  ellipse(50,0 + move2*30,30,30);
  
}

socket.on("value",receiveValue);

function receiveValue(value){
  v1 = value[0];
}