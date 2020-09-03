var obj1,obj2

function setup() {
  createCanvas(1200,800);
  obj1 = createSprite(400, 100, 50, 80);
  obj1.shapeColor="green"
  obj2 = createSprite(400, 800, 80, 30);
  obj2.shapeColor="green"
  obj1.velocityY = 2
  obj2.velocityY = -2
}

function draw() {
  background(0); 
  bounceOff(obj1,obj2)
  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2&&
     object2.x-object1.x<=object1.width/2+object2.width/2){
     object1.velocityX= object1.velocityX*(-1)
     object2.velocityX= object2.velocityX*(-1)
     }
     if(object1.y-object2.y<=object1.height/2+object2.height/2&&
      object2.y-object1.y<=object1.height/2+object2.height/2){
      object1.velocityY= object1.velocityY*(-1)
      object2.velocityY= object2.velocityY*(-1)
      }
}