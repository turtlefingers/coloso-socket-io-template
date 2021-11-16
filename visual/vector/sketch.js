let socket = io();
let x = 0, y = 0, px = 0, py = 0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  background(0);
}

function draw(){
  
  // 배경 검은색 + 반투명
  colorMode(RGB);
  background(0,5);
  
  // 색상/채도/명도 모드로 전환
  colorMode(HSB);
  
  // 색상이 계속 바꾸게함
  stroke(frameCount%360,100,100);
  
  // 선그리기
  strokeWeight(20)
  line(x,y,px,py);
}

socket.on("value",receiveValue);

function receiveValue(value){
  // 이전 좌표 따로 저장
  px = x;
  py = y;
  
  // 현재 좌표 저장
  x = value[0] * width;
  y = value[1] * height;
}