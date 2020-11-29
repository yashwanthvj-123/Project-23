
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myengine,myworld;
var red1,red2,red3;

function preload() {

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {

	createCanvas(800, 500);
	
	rectMode(CENTER);

	ground=createSprite(width/2, height-15, width,10);
	ground.shapeColor=color(255);

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 130, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	myengine = Engine.create();
	myworld = myengine.world;

	red1=new Red (285,430,20,100);
	red1.shapeColor="red";

	red2=new Red (450,430,20,100);

	red3=new Red (368,470,150,20);
	
	var option1={ isStatic:true , density:1 }
 
	var option2={ isStatic:true , restitution:1 } 

	packageBody = Bodies.circle(width/2 , 130 , 5 ,option2);
	World.add(myworld, packageBody);

	ground = Bodies.rectangle(width/2, height-35, width,10,option1);
 	World.add(myworld, ground);

	Engine.run(myengine);
  
}

function draw() {

  rectMode(CENTER);

  background(0);

  red1.display();
  red2.display();
  red3.display();

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  
  

  drawSprites();
 
}

function keyPressed() {

 if (keyDown("DOWN_ARROW")) {
	 Matter.Body.setStatic(packageBody, false);
} 
 
}