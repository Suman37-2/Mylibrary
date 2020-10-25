function isTouching(object1,object2){
    if((object2.x-object1.x<=(object2.width+object1.width)/2)
    && (object1.x-object2.x<=(object2.width+object1.width)/2)
    && (object2.y-object1.y<=(object2.height+object1.height)/2)
    && (object1.y-object2.y<=(object2.height+object1.height)/2)){
    
     /* object2.shapeColor="black";
      object1.shapeColor="red";*/
     return true;
    }
    else {
     /* object2.shapeColor="red";
      object1.shapeColor="black";*/
      return false;
    }
  }
  function bounce(object1,object2){
    if((object2.x-object1.x<=(object2.width+object1.width)/2)
    && (object1.x-object2.x<=(object2.width+object1.width)/2)){
  
    
    
      object2.velocityX=object2.velocityX *(-1);
     
      object1.velocityX=object1.velocityX *(-1);
      
  }
  
  else if( (object2.y-object1.y<=(object2.height+object1.height)/2)
  && (object1.y-object2.y<=(object2.height+object1.height)/2)){
  
    object2.velocityY=object2.velocityY *(-1);
    object1.velocityY=object1.velocityY *(-1);
  }
  /*else{
    rectfixed.velocityX=rectfixed.velocityX * 1;
     rectmove.velocityX=rectmove.velocityX * 1;
     rectfixed.velocityY=rectfixed.velocityY * 1;
     rectmove.velocityY=rectmove.velocityY * 1;
  }*/
  }