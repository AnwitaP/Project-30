
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, polygonImg;

function preload(){
  polygonImg = loadImage("polygon.png");
}

function setup(){
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(390, 300, 250, 10);

  stand2 = new Stand(700, 200, 200, 10);

   //level one
   block1 = new Block(300,275,30,40);
   console.log(block1);
   block2 = new Block(330,275,30,40);
   block3 = new Block(360,275,30,40);
   block4 = new Block(390,275,30,40);
   block5 = new Block(420,275,30,40);
   block6 = new Block(450,275,30,40);
   block7 = new Block(480,275,30,40);
   //level two
   block8 = new Block(330,235,30,40);
   block9 = new Block(360,235,30,40);
   block10 = new Block(390,235,30,40);
   block11 = new Block(420,235,30,40);
   block12 = new Block(450,235,30,40);
   //level three
   block13 = new Block(360,195,30,40);
   block14 = new Block(390,195,30,40);
   block15 = new Block(420,195,30,40);
   //top
   block16 = new Block(390,155,30,40);
 
   //set 2 for second stand
   //level one
   blocks1 = new Block(640,175,30,40);
   blocks2 = new Block(670,175,30,40);
   blocks3 = new Block(700,175,30,40);
   blocks4 = new Block(730,175,30,40);
   blocks5 = new Block(760,175,30,40);
   //level two
   blocks6 = new Block(670,135,30,40);
   blocks7 = new Block(700,135,30,40);
   blocks8 = new Block(730,135,30,40);
   //top
   blocks9 = new Block(700,95,30,40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
 
  slingShot = new SlingShot(this.polygon, {x:100, y:200});

  

}

function draw(){
  background("pink");
  Engine.update(engine);

  fill("blue")
  block1.display();
  fill("yellow");
  block2.display();
  fill("green");
  block3.display();
  fill("blue");
  block4.display();
  fill("yellow");
  block5.display();
  fill("green");
  block6.display();
  fill("blue");
  block7.display();

  fill("yellow");
  block8.display();
  fill("green");
  block9.display();
  fill("blue");
  block10.display();
  fill("yellow");
  block11.display();
  fill("green");
  block12.display();

  fill("blue");
  block13.display();
  fill("yellow");
  block14.display();
  fill("green");
  block15.display();

  fill("blue");
  block16.display();
  
  fill("green");
  blocks1.display();
  fill("yellow");
  blocks2.display();
  fill("blue");
  blocks3.display();
  fill("green");
  blocks4.display();
  fill("yellow");
  blocks5.display();

  fill("blue");
  blocks6.display();
  fill("green");
  blocks7.display();
  fill("yellow");
  blocks8.display();

  fill("blue");
  blocks9.display();

  slingShot.display();
  ground.display();
  stand1.display();
  stand2.display();
  
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}
