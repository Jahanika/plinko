class Plinko {
    constructor(x,y){
        var options={
            restitution:0.4,
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
      
        noStroke();
        fill("red")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        pop();
    }
};