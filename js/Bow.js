class Bow {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,20,100,options);
      this.width = 200;
      this.height = 1400;
      this.image = loadImage("Images/bow.png");
      World.add(world, this.body);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,this.width,this.height);
        pop();
    }
  };
