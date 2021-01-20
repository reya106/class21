var fixed,moving,rect1,rect2
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(100,100,50,50);
  fixed.shapeColor="red"
  moving.shapeColor="red"
  rect1=createSprite(100,100,50,50);
  rect2=createSprite(200,100,50,50);
  rect1.velocityX=5
  rect2.velocityX=-6
  rect1.shapeColor="green"
  rect2.shapeColor="blue"
}

function draw() {
  background(255,255,255);
  moving.x=mouseX
  moving.y=mouseY  
  if(istouching(moving,fixed)){
    fixed.shapeColor="green"
    moving.shapeColor="green" 
  }
  else{
    fixed.shapeColor="red"
    moving.shapeColor="red"
  }
  bounceoff(rect1,rect2)
  drawSprites();
}
