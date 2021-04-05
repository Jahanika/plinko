const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  //create bodies
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight))
  }
  for (var j = 40; j <= innerWidth; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= innerWidth; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
  ground=new Ground(400,790,800,10)

  Engine.run(engine);
}

function draw() {
  background(0);
  drawSprites();
  ground.display()
  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display()

  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display()

  }
  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }
  for(var i = 0; i < particles.length; i++){
    particles[i].display()
  }
}