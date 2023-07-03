let light;
let count;
let ticks;
let rad;
let center_w;
let center_h;
let num_circles = 12;

function preload() {
  light = loadTable('data/light.csv', 'csv');
}

function setup() {
  createCanvas(600, 400);
  ticks = light.getRowCount();
  rad = height / 1.5;
  center_w = width / 2;
  center_h = height / 2;
  count = 0;
  frameRate(5);
}

function draw() {
  
  let light_val = light.getNum(count % ticks, 0);
  
  //background
  if (light_val < 20) {
    background(0, 0, 90);
  }
  else if (light_val < 40) {
    background(0, 0, 100);
  }
  else if (light_val < 60) {
      background(0, 0, 110);
  }
    else if (light_val < 80) {
      background(0, 0, 120);
  }
  else {
    background(light_val - 240, light_val - 230, 140);
  }
  
  
  //flowers
  noStroke();
  fill(random(0, 100), random(100, 200), 255, 2);

  translate(center_w, center_h);
  
  for (let i = 0; i < num_circles; ++i) {
    circle(0, 0, light_val * 1.5 + random(-200, 200));
  }
  
  count++;
  frameRate(8);
  num_circles += random(-2, 5);
  
  if (num_circles > 200) {
    num_circles -= 150;
  }
}