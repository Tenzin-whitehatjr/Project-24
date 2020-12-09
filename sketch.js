var side1, side2, underside, groundSprite, paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	underside = Bodies.rectangle(500 , 650 , 200 , 20 , {isStatic:true});
  World.add(world,underside);

  	side1 = Bodies.rectangle(400 , 620 , 20 , 100 , {isStatic:true});
  World.add(world,side1);

  	side2 = Bodies.rectangle(600 , 620 , 20 , 100 , {isStatic:true});
  World.add(world,side2);

  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);

  paper1 = new Paper(200,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("red");
  rect(underside.position.x,underside.position.y,200,20);
  fill("red");
  rect(side1.position.x,side1.position.y,20,100);
  fill("red");
  rect(side2.position.x,side2.position.y,20,100);
  paper1.display();
  keyPressed();
  drawSprites();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

  }



}