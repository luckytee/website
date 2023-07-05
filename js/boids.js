let num_boids = 200;
const flock = [];
let min_vel = 2;
let max_vel = 4;
// let alignmentSlider, cohesionSlider, separationSlider;
let bird_img;

function setup() {
  createCanvas(800, 600);
  bird_img = loadImage('images/bird.png');
  // alignmentSlider = createSlider(0, 2, 1.5, 0.1);
  // cohesionSlider = createSlider(0, 2, 1.5, 0.1);
  // separationSlider = createSlider(0, 2, 1.5, 0.1);
  
  for(let i = 0; i < num_boids; ++i) {
    flock.push(new Boid());
  }
}

function draw() {
  background(0,204,204);
  for (let boid of flock) {
    boid.edges();
    boid.fly(flock);
    boid.update();
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
    this.maxForce = 0.2;
    this.maxSpeed = 5;
  }
  
  fly(boids) {
    this.acceleration.set(0,0);
    let alignment = this.align(boids);
    let cohesion = this.cohere(boids);
    let separation = this.separate(boids);
    
    // separation.mult(separationSlider.value());
    // cohesion.mult(cohesionSlider.value());
    // alignment.mult(alignmentSlider.value());
    
    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
  }
  
  edges() {
    if (this.position.x > width) {
      this.position.x = 0;
    }
    else if (this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    }
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

  align(boids) {
    let perception = 25;
    let avg = createVector();
    let prox = 0;
    for (let other of boids) {
      let d = dist(this.position.x, 
                   this.position.y, 
                   other.position.x, 
                   other.position.y
                  );
      if (d < perception && other != this) {
        avg.add(other.velocity);
        prox++;
      }
    }
    if (prox > 0) {
      avg.div(prox);
      avg.setMag(this.maxSpeed);
      avg.sub(this.velocity);
      avg.limit(this.maxForce);
    }
    return avg;
  }
  
  cohere(boids) {
    let perception = 50;
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
        avg.add(other.position);
        prox++;
      }
    }
    if (prox > 0) {
      avg.div(prox);
      avg.sub(this.position);
      avg.setMag(this.maxSpeed);
      avg.sub(this.velocity);
      avg.limit(this.maxForce);
    }
    return avg;
  }
  
  separate(boids) {
    let perception = 25;
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
        diff.div(d * d);
        avg.add(diff);
        prox++;
      }
    }
    if (prox > 0) {
      avg.div(prox);
      avg.setMag(this.maxSpeed);
      avg.sub(this.velocity);
      avg.limit(this.maxForce);
    }
    return avg;
  }
  
  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }
  
  show() {
    strokeWeight(8);
    stroke(255);
    bird_img.resize(45,45);
    image(bird_img, this.position.x, this.position.y)
  }
}