var bimg, obimg, obstaclegroup, background1, score, jungleimg, monkeyimg, monkey,bananagroup, ground, StoneGroup, gameState; 

function preload(){
 jungleimg = loadImage("jungle.jpg");
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png", "Monkey_06.png","Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
 bimg = loadImage("banana.png");
 obimg = loadImage("stone.png"); 
  
}
function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(100, 340, 20, 50);
  monkey.addAnimation("mokey", monkeyimg);
  monkey.scale = 0.1;
  background1=createSprite(200, 200, 400, 400);
  background1.addImage("jungle", jungleimg);
  background1.velocityX=-5;
  background1.x = background1.width /2;
  
  score=0;
  
  BananaGroup = createGroup();
  StoneGroup = createGroup();
  
  ground = createSprite(200,385, 400, 10);
  ground.visible = false;
  
  gameState = "play";
}

function draw() {
  background(220);
  drawSprites();
  if(gameState==="play"){
     if (background1.x < 0){
      background1.x = background1.width/2;
      }
     if (keyDown("space")&&monkey.y>=349.3){
      monkey.velocityY = -15;
      }
      monkey.velocityY = monkey.velocityY +0.8
  
    if (monkey.isTouching(BananaGroup)){
       score = score+2;
       BananaGroup.destroyEach();
      }
  
  bananafood();
  obstacles();
    
switch(score){ 
  case 10: monkey.scale = 0.12;
           break;
  case 20: monkey.scale = 0.14;
           break;
  case 30: monkey.scale = 0.16;
           break;        
  case 50: monkey.scale = 0.18;
           break;         
      default:break;
       }  
  if (monkey.isTouching(StoneGroup)){
      monkey.scale = 0.1; 
    
    
  }
}
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " +score, 300,50);
  monkey.depth = monkey.depth+1; 
      
  monkey.collide(ground);
  
  
  
  
  
  
  
  
  
  
  
  
}

function bananafood(){
  if (World.frameCount%80===0){
    var banana = createSprite(400, 200, 20, 20);
    banana.addImage("Banana", bimg);
    banana.scale = 0.05;
    banana.y = random(120, 300);
    banana.velocityX = -8;
    banana.lifetime = 50;
    BananaGroup.add(banana);
  }
}

function obstacles(){ 
  if (World.frameCount%80===0){
    var stone = createSprite(400, 350, 10, 40); 
    stone.velocityX = - 8
    stone.addImage("Stone", obimg);
    stone.scale = 0.15;
    stone.lifetime = 70;
    StoneGroup.add(stone);
  }
}
