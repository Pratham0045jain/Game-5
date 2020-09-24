class Bow {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,20,3,options);
      this.width = 200;
      this.height = 1400;
      this.image = loadImage("Images/bow2.png");
      World.add(world, this.body);
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0,this.width,this.height);
        pop();
    }
  };
