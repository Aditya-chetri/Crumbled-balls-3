class BottomPart {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.4,
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.image = loadImage("sprites/dustbingreen.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      //rectMode(CENTER);
      //fill("red");
      //rect(0, 0, this.width, this.height);
      //pop();
      image(this.image, pos.x, 540, this.width, this.height);
    }
  };