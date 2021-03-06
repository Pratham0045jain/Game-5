class Fruit {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,20,100,options);
      this.width = 80;
      this.height = 100;
      this.image = loadImage("Images/1.png");
      
      World.add(world, this.body);
    }
    display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0,this.width,this.height);
        pop();
    }
  };
