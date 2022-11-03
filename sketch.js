/*var box;
var box2


function setup() {
  createCanvas(400,400);
  box = createSprite ( 200,200,30,30);
  box.shapeColor = "green";
  box2 = createSprite (100,200,30,30);
  box2.shapeColor = "blue";
}

function draw() 
{
background("pink");
if (keyIsDown(RIGHT_ARROW)){
  box.x = box.x+5;
}
if (keyIsDown(LEFT_ARROW)){
  box.x = box.x-5;
}
if (keyIsDown(UP_ARROW)){
  box.y = box.y-5;
}
if (keyIsDown(DOWN_ARROW)){
  box.y = box.y+5;
}

if (keyDown("d")){
  box2.x = box2.x+5;
}

if (keyDown("a")){
  box2.x = box2.x-5;
}
if (keyDown("w")){
  box2.y = box2.y-5;
}
if (keyDown("s")){
  box2.y = box2.y+5;
}



drawSprites();


}
*/

var ball;
var wall1;
var wall2;
var wall3;
var wall4;
var target;
function setup(){
  createCanvas(400,400);
  ball = createSprite(20,380,20,20);
  ball.shapeColor = "green";
  wall1 = createSprite(180,360,370,10);
  wall2 = createSprite(250,180,400,10);
  wall3 = createSprite(265,250,10,140);
 target = createSprite(300, 40,100,10);
 target.shapeColor="blue";
  wall4 = createSprite(100,290,10,140);
  ball.velocityY = 0;
ball.velocityX =0;
textSize(30);

}


function draw(){
  background("white");
  if (keyDown("up")) {
    ball.velocityX=0;
    ball.velocityY=-2;
    
  }
  if (keyDown("down")) {
    ball.velocityX=0;
    ball.velocityY=2;
    
  }
  if (keyDown("right")) {
    ball.velocityX=3;
    ball.velocityY=0;
  }
   if (keyDown("left")) {
    ball.velocityX=-2;
    ball.velocityY=0;
  }
  edges = createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounce(target);
  
  if(target.x<0 || target.x>400 || target.y>400 || target.y<0){
    text("YOU WON", 150, 160);
    ball.x=10;
    ball.y=390;
  }
 if (ball.isTouching(wall1)||ball.isTouching(wall2)||ball.isTouching(wall3)||ball.isTouching(wall4)) {
   text("GAME OVER!!!", 150, 160);
   ball.velocityX=0;
   ball.velocityY=0;
 }
 
  drawSprites();
}


