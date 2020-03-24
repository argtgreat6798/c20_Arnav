function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  moveRect = createSprite(400, 200, 80, 30);
  moveRect.shapeColor = "Yellow";
  moveRect.debug = true;
}

function draw() {
  background(0,0,0);  
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;
  if (moveRect.x-fixedRect.x < fixedRect.width/2 + moveRect.width/2 && fixedRect.x - moveRect.x < fixedRect.width/2 + moveRect.width/2 &&
     moveRect.y-fixedRect.y < moveRect.height/2 +fixedRect.height/2) {
    moveRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }
  else {
  moveRect.shapeColor = "green";
  fixedRect.shapeColor =  "Yellow";
  }
  drawSprites();
}