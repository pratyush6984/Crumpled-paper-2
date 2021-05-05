
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var engine;
var world;
var paper;
var bar2;
var bar1;
var bar3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(1400, 30);
	bar1 = new Dustbin2(970,360,30,150);
	bar2 = new Dustbin(1085,425,200,30);
	bar3 = new Dustbin2(1170,360,30,150);
	paper = new Paper(100,420);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  bar1.display();
  bar2.display();
  bar3.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:200, y:-95
		})
	}
}