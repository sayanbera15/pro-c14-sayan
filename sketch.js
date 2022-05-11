var backgroundImage;
var bow, bowImage;
var red_balloon, red_balloonImage;
var green_balloon, green_balloonImage;
var blue_balloon, blue_balloonImage;
var yellow_balloon, yellow_balloonImage;

function preload(){
  //load your images here
  backgroundImage = loadImage ("background0.png");
  bowImage = loadImage ("bow0.png");
  red_balloonImage = loadImage (red_balloon0.png);
  green_balloonImage = loadImage ("green_balloon0.png");
  blue_balloonImage = loadImage ("blue_balloon0.png");
  yellow_balloonImage = loadImage ("yellow_balloon0.png");

}

function setup() {
createCanvas(600, 600);

//add code here
background = createSprite (0,0,600,600);
background.addImage (backgroundImage);
background.scale = 2.5;

bow = createSprite (480,220,20,50);
bow.addImage (bowImage);
bow.scale = 1;

for (var i =60; i<400; i+60){
  red_balloon = createSprite (50,1,1,1);
  red_balloon.addImage (red_balloonImage);
  red_balloon.scale = 0.1;
}

for (var i = 110; i<360; i = i+60){
  green_balloon = createSprite (100,1,1,1);
  green_balloon.addImage (green_balloonImage);
  green_balloon.scale = 0.1;
}

for (var i = 150; i<360; i = i+60){
blue_balloon = createSprite (150,1,1,1);
blue_balloon.addImage (blue-balloonImage);
blue_balloon.scale = 0.1;
}

for (var i = 200; i<280; i = i+60){
  yellow_balloon = createSprite (200,1,1,1);
  yellow_balloon.addImage (yellow_balloonImage);
  yellow_balloon.scale = 1;
}

}

function draw() {
  //add code here
  background.velocityX = -3;
  if (background.x<0){
    background.x = background.width/2;
  }

  bow.y = World.mouseY
  drawSprites();

}


































