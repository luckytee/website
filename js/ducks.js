let num_boids = 60;
const flock = [];
let perception = 50;
let min_vel = 3;
let max_vel = 6;
let duck;
function preload() {
  duck = loadImage("images/ducky_small.png");
}

function setup() {
  createCanvas(600, 400);
  for(let i = 0; i < num_boids; ++i) {
    flock[i] = new Boid();
  }
  frameRate(15);
}

function draw() {
  background(0, 0, 255);
  for (let boid of flock) {
    boid.fly(flock);
    boid.update();
    boid.edges();
    boid.show();
  }
}

//BOID CLASS
class Boid {
  
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(min_vel, max_vel));
    this.acceleration = createVector();
    this.maxForce = 1;
    this.maxSpeed = 4;
  }
  
  fly(boids) {
    this.acceleration.set(0,0);
    let separation = this.separate(boids);
    this.acceleration.add(separation);
  }
  
  edges() {
    if (this.position.x > width - 25) {
      this.velocity.x *= -1;
    }
    else if (this.position.x < -15) {
      this.velocity.x *= -1;
    }
    if (this.position.y > height - 50) {
      this.velocity.y *= -1;
    }
    else if (this.position.y < 0) {
      this.velocity.y *= -1;
    }
  }
  
  separate(boids) {
    let avg = createVector();
    let prox = 0;
    for (let other of boids) {
      let d = dist(
        this.position.x, 
        this.position.y, 
        other.position.x, 
        other.position.y
      );
      if (d < perception && other != this) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.div(d);
        avg.add(diff);
        prox++;
      }
    }
    if (prox > 0) {
      avg.div(prox);
      // avg.sub(this.position);
      avg.setMag(this.maxSpeed);
      avg.sub(this.velocity);
      avg.limit(this.maxForce);
    }
    return avg;
  }
  
  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  }
  
  show() {
    // noStroke();
    // fill(51, 155, 255, 50);
    // circle(this.position.x, this.position.y, 100);
    // duck.resize(25,25);
    image(duck, this.position.x, this.position.y)
  }
}