const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var gameValue = 0;
var form;
var bg;
var bow;
var mouseFlag = false;
var treeImg;
var level;
var arrow;
var launcher;

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

  

    
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
  Render.run(render); 

}

function draw() {
  if(bg){
    background(bg); 
    Engine.update(engine);
    
     //image(archerImg,displayHeight/4,displayWidth/5);



  if(mouseFlag===true){
    image(treeImg,displayWidth/2,displayHeight/2,1000,500);
    for(var i=0; i<fruit.length; i++){
      fruit[i].display();
    }
    arrow.display();
    //bow.display();  
    if(launcher.chain.bodyA !== null){
      launcher.display();
    }
    
    if(keyDown(32)){
      gameValue = 1;
      launcher.fly();
    }
    if(gameValue === 0){
      Matter.Body.setPosition(arrow.body,{x:mouseX,y:mouseY});
    } 
    
    //console.log(fruit);
    
  }
  form.display();
  drawSprites();
  
  
  }

}

/* function mouseDragged(){
  

}

function mouseReleased(){
  

} */
