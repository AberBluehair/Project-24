class Paper {
    constructor(x,y,w,h) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,w,h,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
      }
      display(){
         var pos = this.body.position;
         push();
        translate(pos.x,pos.y);
        ellipse(CENTER);
        stroke("white")
        fill(255);
        circle(0,0,this.radius);
        pop();
      }
    }
