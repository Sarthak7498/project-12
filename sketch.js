var jake;
var path;
var bomb;
var energydrimk;
var coin;

function preload(){
  //pre-load images
  jakeImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
  pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(500,500);
  //create sprites here

  path=createSprite(200,200);
  path.addAnimation("Img", pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  
 var jake=createSprite(200,200);
 jake.addAnimation("Img", jakeImg);
 jake.scale=0.7
  

  
}

function draw() {
  background(220);
  drawSprites();

  if(path.y>400) {
    path.y=height/2 ;
  }

  
  
}
