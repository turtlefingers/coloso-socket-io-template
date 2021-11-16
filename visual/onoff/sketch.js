let socket = io();
let v1 = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw(){
  
  // 배경 검은색 + 반투명
  background(0,50);
  
  // 값이 없으면 가운데 값이 있으면 가운데+랜덤
  if(v1 == 0)translate(width/2,height/2);
  else translate(width/2 + random(-10,10),height/2 + random(-5,5));
  
  // 사각형 위치기준을 중앙으로
  rectMode(CENTER);
  
  
  // 얼굴
  fill(255);
  ellipse(0,0,200,200);
  
  // 눈
  fill(0);
  ellipse(-60,0,20,50);
  ellipse(60,0,20,50);
  
  // 입
  rect(0,20 - v1* 5, 50, 10);
  rect(0,30 + v1*30, 50, 10);
  
}

socket.on("value",receiveValue);

function receiveValue(value){
  v1 = value[0];
}