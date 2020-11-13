var movingrect ,fixingrect;
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 50, 50);
  fixingrect=createSprite(400,200,50,50);
}

function draw() {

  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixingrect.x<movingrect.width/2+fixingrect.width/2
  &&fixingrect.x-movingrect.x<movingrect.width/2+fixingrect.width/2
  &&movingrect.y-fixingrect.y<movingrect.height/2+fixingrect.height/2
  &&fixingrect.y-movingrect.y<movingrect.height/2+fixingrect.height/2)
  {
    movingrect.shapeColor='red'
    fixingrect.shapeColor='red'
  }
  else{
    movingrect.shapeColor='green'
    fixingrect.shapeColor='green'
  }
  background(255,255,255);  
  drawSprites();
}