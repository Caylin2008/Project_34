
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter = 40;
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500;
	//Create the Bodies Here.
	bobobject1 = new Paper (300,600,25)
	bobobject2 = new Paper (400,600,25)
	bobobject3 = new Paper (500,600,25)
	bobobject4 = new Paper (600,600,25)
	bobobject5 = new Paper (700,600,25)

	roofObject = new Ground (500, height/4, 500,50);

	chain1 = new Chain(bobobject1.body,roofObject.body,-bobDiameter*2,0);
	chain2=new Chain(bobobject2.body,roofObject.body,-bobDiameter*1, 0)
	 chain3=new Chain(bobobject3.body,roofObject.body,0, 0) 
	 chain4=new Chain(bobobject4.body,roofObject.body,bobDiameter*1, 0)
	 chain5=new Chain(bobobject5.body,roofObject.body,bobDiameter*2, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  roofObject.display();
  chain1.display();
  chain2.display();  
  chain3.display(); 
   chain4.display();  
   chain5.display(); 
   
  drawSprites();
 
}

function drawLine(constraint) { 
	bobBodyPosition=constraint.bodyA.position 
	roofBodyPosition=constraint.bodyB.position 
	roofBodyOffset=constraint.pointB; 
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x 
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y 
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
 }
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45});
	}
}
