var box1,box2;
function setup(){ 
 createCanvas(400,400);
 box1=createSprite(50,150,40,40);
 box2=createSprite(340,150,50,20);
 box1.velocityX=4;
 box2.velocityX=-4;
 box1.shapeColor="green";

}
function draw(){
  background("red");
  bounce(box1,box2);
  drawSprites();
}