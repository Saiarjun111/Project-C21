var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup(){
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=Math.round(random(22,83));
  
  
  bullet=createSprite(50,200,50,5);
  
  bullet.shapeColor="white";
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor="white";
  

}
function draw(){
  bullet.velocityX=speed;
  background("blue");
  if(wall.x-bullet.x<(wall.width+bullet.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*speed*weight*speed/thickness*thickness*thickness;
    if(deformation>300){
      wall.shapeColor=color(255,0,0);
  }
  
  if(deformation<300){
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();

}