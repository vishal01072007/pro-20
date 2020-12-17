var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90)
  weight=random(400,1500)
 car= createSprite(50,200,50,50)

 wall=createSprite(1500,200,weight,height/2)

 car.velocityX=speed;

}

function draw() {
  background(255,255,255); 
  wall.display
  
  collided(); 
  drawSprites();
}
function collided(){
  if(car.X-wall.X < car.width/2 + wall.width/2)
    (car.y + wall.y <car.width/2 + wall.width/2)
      if (wall.x-car.x<(car.width)/2){
        car.velocityX=0
        var deformation=0.5*weight*speed*speed/22500
        if(deformation>180){
          car.shapeColor=(255,0,0)
        }
          if(deformation<180 && deformation>100){
            car.shapeColor(230,230,0)
        }
        if (deformation<100){
          car.shapeColor(0,255,0)



        }
      
    
  }
}
    
     
     
      