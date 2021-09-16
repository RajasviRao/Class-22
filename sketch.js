const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
function setup() {
  createCanvas(800,400);
  //STATIC RECT
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  object1=Bodies.rectangle(200,100,50,50);
  object2=Bodies.rectangle(300,200,50,50);
  World.add(world,object1)
  World.add(world,object2)
  console.log(object1);

}

function draw() {
  Engine.update(engine);
  background(255,255,255);
  rect(object1.position.x,object1.position.y,50,50);
  rect(object2.position.x,object2.position.y,50,50);
  drawSprites();
}