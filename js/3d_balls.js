let ball;
let ball_rate = 5;
let balls = [];
let num_balls = 100;
let margin = 0;

function preload() {
  ball = loadModel('objects/ball.obj');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  background(0);
  for (let i = 0; i < num_balls; ++i) {
    balls[i] = new Random_ball();
  }
}

function draw() {
  
  rotateY(45);
  // rotateY(frameCount * .05);
  translate(0, 0, -200);
  translate(400, 0, 0);
  
  
  orbitControl(0.1, 0.1, 0.1);
  background(0);
  grid();
  normalMaterial();
  
  for (let i = 0; i < num_balls; ++i) {
    balls[i].move();
    balls[i].display();
  }
}


class Random_ball {
  constructor() {
    this.x = random(-(width - margin)/2, (width - margin)/2);
    this.y = random(-(height - margin)/2, (height - margin)/2);
    this.z = random(-(width - margin)/2, (width - margin)/2);
    this.speed_x = random(-ball_rate, ball_rate);
    this.speed_y = random(-ball_rate, ball_rate);
    this.speed_z = random(-ball_rate, ball_rate);
  }

  move() {
    this.x += this.speed_x;
    this.y += this.speed_y;
    this.z += this.speed_z;
    if (this.x >= (width - margin)/2 || this.x <= -(width - margin)/2) {
      this.speed_x *= -1;
    }
    if (this.y >= (height - margin)/2 || this.y <= -(height - margin)/2) {
      this.speed_y *= -1;
    }
    if (this.z >= (width - margin)/2 || this.z <= -(width - margin)/2) {
      this.speed_z *= -1;
    }
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    rotateX(frameCount * .05);
    rotateY(frameCount * .05);
    rotateZ(frameCount * .05);
    scale(100);
    model(ball);
    pop();

  }
}


function grid() {
  strokeWeight(1);
  stroke(55, 252, 6);
  
  // //a
  // vertex(-width/2, -height/2, width/2);
  // //b
  // vertex(width/2, -height/2, width/2);
  // //d
  // vertex(width/2, height/2, width/2);
  // //c
  // vertex(-width/2, height/2, width/2);
  // //e
  // vertex(-width/2, -height/2, -width/2);
  // //f
  // vertex(width/2, -height/2, -width/2);
  // //h
  // vertex(width/2, height/2, -width/2);
  // //g
  // vertex(-width/2, height/2, -width/2);
  // //e
  // vertex(-width/2, -height/2, -width/2);
  
  // line(a, b);
  line(-width/2, -height/2, width/2, width/2, -height/2, width/2);
  // line(a, c);
  line(-width/2, -height/2, width/2, -width/2, height/2, width/2);
  // line(b, d);
  line(width/2, -height/2, width/2, width/2, height/2, width/2);
  // line(c, d);
  line(-width/2, height/2, width/2, width/2, height/2, width/2);
  // line(a, e);
  line(-width/2, -height/2, width/2,-width/2, -height/2, -width/2);
  // line(b, f);
  line(width/2, -height/2, width/2, width/2, -height/2, -width/2);
  // line(c, g);
  line(-width/2, height/2, width/2, -width/2, height/2, -width/2);
  // line(d, h);
  line(width/2, height/2, width/2, width/2, height/2, -width/2);
  // line(e, f);
  line(-width/2, -height/2, -width/2, width/2, -height/2, -width/2);
  // line(f, h);
  line(width/2, -height/2, -width/2, width/2, height/2, -width/2);
  // line(e, g);
  line(-width/2, -height/2, -width/2, -width/2, height/2, -width/2);
  // line(g, h);
  line(-width/2, height/2, -width/2, width/2, height/2, -width/2);
}

