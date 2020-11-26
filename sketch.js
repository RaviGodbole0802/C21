var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;


function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);



  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
  gameObject1 = createSprite(100,100,50,50)
  gameObject2 = createSprite(200,100,50,50)
  gameObject3 = createSprite(300,100,50,50)
  gameObject4 = createSprite(400,100,50,50) 

  gameObject1.shapeColor = "green"
  gameObject2.shapeColor = "green"
  gameObject3.shapeColor = "green"
  gameObject4.shapeColor = "green"
}

function draw() {
  background(255,255,255);
  movingRect.x = mouseX
  movingRect.y = mouseY
  if(isTouching(movingRect,gameObject3)){
   gameObject3.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }
  else{
    gameObject3.shapeColor = "green"
  movingRect.shapeColor = "green"
  }
  
  drawSprites();
}

