var baloon,baloonImage1,baloonImage2;
// create database and position variable here
var database, height;

function preload(){
   bg =loadImage("cityImage.png");
   baloonImage1=loadAnimation("hotairballoon1.png");
   baloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  baloon=createSprite(250,450,150,150);
  baloon.addAnimation("hotAirBalloon",baloonImage1);
  baloon.scale=0.5;

  textSize(20); 
  var baloonPosition = database.ref('baloon/height')
  baloonPosition.on("value", readHeight, showError);

}

// function to display UI
function updateHeight(x,y){
  database.ref('baloon/height').set({
    'x': height.x + x,
    'y': height.y + y
  })
}

function readHeight(data){
  height = data.val();
  console.log(height.x); 
  baloon.x = height.x; 
  baloon.y = height.y;
}

function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    baloon.addAnimation("hotAirBalloon",baloonImage2);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    baloon.addAnimation("hotAirBalloon",baloonImage2);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    baloon.addAnimation("hotAirBalloon",baloonImage2);
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    baloon.addAnimation("hotAirBalloon",baloonImage2);
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function showError(){
  console.log("error in database");
}