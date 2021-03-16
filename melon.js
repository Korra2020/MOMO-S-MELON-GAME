class Melon{
  constructor(img,x) {
    this.pos = createVector(220+x*100,height- 50-x*50);
    this.vel = createVector(0, 2*x);
    this.acc = createVector(0, 0);
    this.pic = img;
    
  }
    
  applyForce(force) {
  this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  display() {
    fill(25, 150,30);
    stroke(255);
    //image have this.pos.y not this.pos.y%150 object oriented change
     image(this.pic,this.pos.x, this.pos.y, 50, 40)
    // rect(this.pos.x, this.pos.y, 50, 40);
  }

  edges() {
    if (this.pos.y > height-50 || this.pos.y<0) {
      this.vel.y *= -1;
      // this.pos.y = height-50;
    }
  }
}

