var backgroundImg,background;
var snow;
var obj1,obj2;
var snowArry = []
var e = Matter.Engine
var w = Matter.World
var b = Matter.Bodies
var en,wo

function preload(){
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  /* background = createSprite(500, 200, 800, 400);
  background.addImage(backgroundImg);*/
  en = e.create()
  wo = en.world
}

function draw() { 
  background(backgroundImg)
  e.update(en)
 // background.display();
  if(frameCount % 5 === 0){
    snow = new Snow(random(50,750),-10)
    snowArry.push(snow)
  }
  for(var i = 0; i < snowArry.length; i++){
    snowArry[i].display()
  }
  drawSprites();
}
