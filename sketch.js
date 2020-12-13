var wall,car;
var weight,speed;

function setup() {
  createCanvas(1600,400);
  speed=random(45,100);
  weight=random(400,1500);
  car=createSprite(50, 200, 100, 30);
  wall=createSprite(1000, 200, 60, height/2);
  wall.shapeColor="lightblue";
  car.shapeColor="white";
  car.velocityX=speed;
    }

function draw() {
  background("purple");  
   wall.visible=true;
  if(isCollide(wall,car)){
      car.velocityX=0;
      var deformation=0.5*weight*speed*speed/22509;
      if(deformation>180){
         car.shapeColor=color(255,0,0);
               }
      
       else if(deformation<180 && deformation>100){
        car.shapeColor=color(230,230,0);
         }
     
     else{
      car.shapeColor=color(0,255,0);
      }
     }
    
     drawSprites();
  }

  function isCollide(obj1,obj2){
    if(obj1.x-obj2.x<(obj2.width+obj1.width)/2) 
    return true;
     else 
     return false;

  }