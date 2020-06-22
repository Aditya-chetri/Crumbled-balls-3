const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var slingShot;

var gameState = "onSling";

function preload(){
}
function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  
  platform = new Ground(400, 680, 800, 40);
  paper = new Ball(100, 672, 35, 35);
  part1 = new BottomPart(539, 700, 165, 120);
  part2 = new DustbinPart(550, 620, 10, 80);
  part3 = new DustbinPart(690, 620, 10, 80);
  slingShot = new Launcher(paper.body,{x:200, y:460});
}
function draw() {
  background(250);
  platform.display();
  part2.display();
  part3.display();
  paper.display();
  part1.display();
  slingShot.display();
  drawSprites();
}
function mouseDragged(){
  if (gameState!=="launched"){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}




