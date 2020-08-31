class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution :0.3,
          friction : 0.8 ,
          density : 1.2,
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r= r;
      //this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // rectMode(CENTER);
       ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.r);
    }
  };