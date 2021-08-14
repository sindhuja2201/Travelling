var sea,ship1;
var seaImg,ship1Img;

function preload(){
seaImg = loadImage("sea.png");
ship1Img = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
}

function setup(){
  createCanvas(400,600);
  // Moving background
  sea=createSprite(400,200);
  sea.addImage(sea.png);
  sea.velocityX=50

  //creating ship running 
ship1= createSprite(70,580,20,20);
ship1.addAnimation("ShipMoving",ship1Img);
ship1.scale=0.08;
}

function draw() {
  background(0)
  sea.velocityX = -3;
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
}
