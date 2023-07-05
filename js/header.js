let bg;
let y = 0;
let lines = [];
let num_lines = 20;
let t = 'Terra Schneider';
let cnv;

function preload() {
  bg = loadImage('images/bg.png');
}
function setup() {
  cnv = createCanvas(966/5, 956/5);
  for (let i = 0; i < num_lines; ++i) {
    lines[i] = new Line();
  }
  cnv.addClass('header_img');
  cnv.position(450, 15);
}

function draw() {
  background(bg);

  for (let i = 0; i < num_lines; ++i) {
    lines[i].move();
    lines[i].show();
  }
  
//   tex();
  
  frameRate(10);
  filter(BLUR, 2);
  
}

function tex() {
  fill(0);
  textSize(32);
  textFont('Times New Roman');
  text(t, 60, height - 40);
}

class Line {
  constructor() {
    this.y = random(height);
    this.color_val = random(1);
    this.speed = random(1,20);
  }
  show() {
    strokeWeight(0.5);
    let begin = color(128, 255, 0);
    let end = color(213, 255, 0);
    let c = lerpColor(begin, end, this.color_val);
    stroke(c);
    line(0, y, width, y);
    line(0, this.y, width, this.y);
  }
  move() {
    this.y += random(-2, this.speed);
    if (this.y > height) {
      this.y = 0;
    }
  }
}