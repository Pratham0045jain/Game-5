const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var form;
var bg;
var bow;

var level;


function preload(){
  bg = loadImage("Images/bgImage.jpg");
  archerImg = loadImage("Images/archer.png");
}

function setup() {
  var canvas = createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  
  form = new Form();
  bow = new Bow(200,200);

  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
  Render.run(render);

}

function draw() {
  if(bg){
    background(bg); 
    Engine.update(engine);
    
     //image(archerImg,displayHeight/4,displayWidth/5);

     

  form.display();
  drawSprites();
  
  
  }
  
  
}

