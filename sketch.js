var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(800,400);
  bullet=createSprite(50,200,80,20);
  thickness=random(22,83);
  wall=createSprite(500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
}

function draw() {
  background("black");
  bullet.velocityX=speed;  
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
  if(bullet.isTouching(wall)&&damage<=10){
    bullet.velocityX=0;
    bullet.shapeColor="green";
  }
  if(bullet.isTouching(wall)&&damage>10){
    bullet.velocityX=0;
    bullet.shapeColor="red";
  }
  drawSprites();
  }
  

