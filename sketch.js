
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	  //Create the Bodies Here.
    ground = new Ground (400,680,800,20)
    var boxleft =  createSprite(500,620, 20,100);
    boxleft.shapeColor = "blue";
    var boxbottom = createSprite(600,660,200,20);
    boxbottom.shapeColor = "blue";
    var boxright = createSprite(700,620,20,100);
    boxright.shapeColor = "blue";
    paper =  new Paper (100,650,20);

	  Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  ground.display();
 paper.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
  }
}


