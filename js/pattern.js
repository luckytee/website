let x_point = 0;
let y_point = 100;
let factor = 100;
let curr_x;
let curr_y;
let prev_x;
let prev_y;

function setup() {
  createCanvas(600, 400);
  background(0);
  prev_x = 0;
  prev_y = random(75);
}

function draw() {
  strokeWeight(0.5);
  
  //simple lines
  // stroke(255);
  // line(x_point, y_point, x_point, y_point - random() * factor);
  
  //"heartbeats"
  
  //color changer
  let begin = color(102, 102, 255);
  let end = color(255, 0, 255);
  let r = noise(x_point, y_point);
  let col = lerpColor(begin, end, r);
  stroke(col);
  
  curr_y = y_point - r * factor;
  if (prev_x < width) {
    line(prev_x, prev_y, x_point, curr_y);
  }
  
  //quartiles
  if (Math.floor(r * factor) == 0 ||
      Math.floor(r * factor) == 25 ||
      Math.floor(r * factor) == 50 ||
      Math.floor(r * factor) == 75 || 
      Math.floor(r * factor) == 100) {
    noStroke();
    fill(255, 255, 255, 150);
    circle(x_point, y_point - r * factor, 10);
  }
  
  prev_x = x_point;
  prev_y = curr_y;
  
  //move x along
  x_point += 1;
  
  //start new row
  if (x_point > width) {
    y_point += 100;
    x_point %= width;
  }
  
  //start new canvas
  if (y_point > height) {
    y_point = 100;
    background(0);
  }
}