class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length:0
        }
        this.chain = Matter.Constraint.create(options);
        this.image = loadImage("Images/bow2.png");
        World.add(world, this.chain);

        this.pointB=pointB;
    }

    display(){
        push();
        imageMode(CENTER)
        image(this.image,this.chain.pointB.x,this.chain.pointB.y,50,500);

        strokeWeight(4);
        //if(this.chain.bodyA!=null){
        line(this.chain.bodyA.position.x-100,this.chain.bodyA.position.y-25,this.chain.pointB.x-25,this.chain.pointB.y-250);
        
        
        
        
        
        line(this.chain.bodyA.position.x-100,this.chain.bodyA.position.y+25,this.chain.pointB.x-25,this.chain.pointB.y+250)
        //}

        pop();

    }
    attach(object){
        this.chain.bodyA = object;
        this.chain.pointB = this.pointB;
    }
    fly(){
        this.chain.bodyA = null;
    }
}