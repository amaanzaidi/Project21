var thickness,wall;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 100,20);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  
}

function draw() {
  background("black");
  bullet.velocityX = speed;
if(hasCollided(bullet,wall)){
bullet.velocityX=0;
bullet.width/2;
bullet.x = wall.x-50;
var damage = 0.5 * weight * speed* speed/(thickness*thickness*thickness);
if(damage>10){
wall.shapeColor=color(225,0,0);

}
if(damage<10){
  wall.shapeColor=color(0,225,0);
  
  }


}
  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){

  return true
}
else{
  return false;
}

}