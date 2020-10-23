
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,200,20);
	dustbin1 = new Dustbin(650,590,90,10);
	dustbin2 = new Dustbin(600,555,10,60);
	dustbin3 = new Dustbin(700,555,10,60);
	
	ground = new Ground(400,600,800,12);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  drawSprites();
 
  if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-35});
  }
}



