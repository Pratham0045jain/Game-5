
var level;
var OK;
var arrow;
var maxScore;
var archer;
var tree;







class Form {

     

    constructor() {

      archer = createImg("Images/archer.png");
      archer.position(displayWidth/3,displayHeight/3);
      
      this.OK = createButton('OK'); 
        this.OK.position(displayWidth/2+50, displayHeight/3+90);
        this.OK.style("background-color","purple");

        this.OK.hide();

        this.level = createInput("             Level 1");
        this.level.position(displayWidth/2, displayHeight/3);
        this.level.style("background-color","yellow");
        this.level.hide();
      
      
      this.button = createButton('Play');
      this.button2 = createButton('Friends');
      this.button3 = createButton('Abilities');

      this.restart = createButton('Restart');
      this.music = createButton('Stop Music');

      
      this.container = createElement('div');

      this.title = createElement('h2');
      
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      
      this.button.position(displayWidth , displayHeight/3-60);
      this.button.size(100,50);
      this.button.style("background-color","orange");


      this.button2.position(displayWidth-45, displayHeight/2-180);
      this.button2.size(150,50);
      this.button2.style("background-color","yellow");

      this.button3.position(displayWidth-90, displayHeight/2-120);
      this.button3.size(200,50);
      this.button3.style("background-color","cyan");

      this.restart.position(displayWidth-100,20);

      //this.input.position(displayHeight/2-100,displayWidth/3);

      
  
      this.button.mousePressed(()=>{
        this.button.hide();
        this.button2.hide();
        this.button3.hide();

        this.level.show();

        

        arrow = createInput("Number of Arrows = 5");
        arrow.position(displayWidth/2, displayHeight/3+30);
        arrow.style("background-color","orange");

        maxScore = createInput("Score Required = 100");
        maxScore.position(displayWidth/2, displayHeight/3+60);
        maxScore.style("background-color","cyan");

        this.OK.show();





      });

      this.OK.mousePressed(()=>{
        this.level.hide();
        arrow.hide();
        maxScore.hide();
        this.OK.hide();
        archer.hide();
        
       // tree.position(displayWidth/2,displayHeight/2);
        mouseFlag = true;
        bow = new Bow(mouseX,mouseY);

        for(var i = displayWidth/2;i>800;i = i+10){
          fruit.push(new Fruit(i,random(200,300)));
        }
        
         
      });

      /* this.button2.mousePressed(()=>{
         
      });

      this.button3.mousePressed(()=>{
        
    });
  
      this.reset.mousePressed(()=>{
        
      }); */
  
    }
  }
  