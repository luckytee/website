let balls = [];
let ball_rate = 7;
let num_balls;
let second_layer;
let button_up;
let button_down;

function setup() {
  let cnv = createCanvas(600, 400);
  num_balls = 10;
  init();
  button_up = createButton('add ball');
  button_down = createButton('subtract ball');
  button_up.addClass("myButtons");
  button_down.addClass("myButtons");
  button_up.position(cnv.position().x + 8, cnv.position().y + 370);
  button_down.position(cnv.position().x + 80, cnv.position().y + 370);
  button_up.mousePressed(addBall);
  button_down.mousePressed(subBall);
}

function draw() {
  background(0);
  second_layer.background(0, 0, 0, 0);
  noStroke();
  
  let avg_x = 0;
  let avg_y = 0;
  
  for (let i = 0; i < num_balls; ++i) {
    balls[i].move();
    avg_x += balls[i].x;
    avg_y += balls[i].y;
    fill(255);
    balls[i].display();
  }
  
  avg_x /= num_balls;
  avg_y /= num_balls;
  
  image(second_layer, 0, 0);
  second_layer.fill(255, 0, 0);
  second_layer.noStroke();
  second_layer.circle(avg_x, avg_y, 2);
  
  fill(255, 255, 0);
  circle(avg_x, avg_y, 10);
}

function addBall() {
  num_balls++;
  init();
}

function subBall() {
  num_balls--;
  init();
}

function init() {
  createCanvas(600, 400);
  second_layer = createGraphics(width, height);
  for (let i = 0; i < num_balls; ++i) {
    balls[i] = new Random_ball();
  }
}

// Random Ball Class
class Random_ball {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = 9;
    this.speed_x = random(-ball_rate, ball_rate);
    this.speed_y = random(-ball_rate, ball_rate);
  }

  move() {
    this.x += this.speed_x;
    this.y += this.speed_y;

    if (this.x >= width || this.x <= 0) {
      this.speed_x *= -1;
    }

    if (this.y >= height || this.y <= 0) {
      this.speed_y *= -1;
    }
    
  }

  display() {
    circle(this.x, this.y, this.diameter);
  }
}