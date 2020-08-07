const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var form;
var bg;
var bow;
var mouseFlag = false;
var treeImg;
var level;

var fruit = [];


function preload(){
  bg = loadImage("Images/bgImage.jpg");
  archerImg = loadImage("Images/archer.png");
  treeImg = loadImage("Images/tree.png");
}

function setup() {
  var canvas = createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  
  form = new Form();
  //bow = new Bow(200,200);

  
    console.log("hi");
    for(var i = 50; i<200; i = i+10){
      fruit.push(new Fruit(i,750));
  
    }
  /* var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
  Render.run(render); */

}

function draw() {
  if(bg){
    background(bg); 
    Engine.update(engine);
    
     //image(archerImg,displayHeight/4,displayWidth/5);



  if(mouseFlag===true){
    image(treeImg,displayWidth/2,displayHeight/2,1000,500);
    bow.display();  
    //console.log(fruit);
    for(var j=0; j<fruit.length; j++){
      fruit[i].display();
    }
  }
     

  form.display();
  drawSprites();
  
  
  }
  
  
}

