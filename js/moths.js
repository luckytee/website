//TODO: INCORPORATE FLOCKING

let temp_val;
let temp;
let ticks;
let count;
let num_moths = 150;
let moth_size = 30;
let moths = [];
let moth_speed = 10;


function preload() {
  temp = loadTable('data/temp.csv', 'csv');
}


function setup() {
  createCanvas(600, 600);
  ticks = temp.getRowCount();
  count = 0;
  frameRate(10);
  
  let x1 = random(width);
  let x2 = random(width);
  let y1 = random(height);
  let y2 = random(height);
  
  let initial_temp = temp.getNum(0,0);
  colorMode(RGB);
  let from1 = color(0, 0, 0);
  let to1 = color(255, 255, 255);
  let interA = lerpColor(to1, from1, (initial_temp/28.2 - 0.25));
  let interB = lerpColor(from1, to1, (initial_temp/28.2 - 0.25));
  
  for (let i = 0; i < num_moths; ++i) {
    moths[i] = new Moth(interA, interB);
  }
}

function draw() {
  temp_val = temp.getNum(count % ticks, 0);
  colorMode(RGB);
  let from1 = color(0, 0, 0);
  let to1 = color(255, 255, 255);
  let interA = lerpColor(to1, from1, (temp_val/28.2 - 0.25));
  let interB = lerpColor(from1, to1, (temp_val/28.2 - 0.25));
  background(interA);
  
  let x_avg = 0;
  let y_avg = 0;
  
  for (let i = 0; i < num_moths; ++i) {
    
    x_avg += moths[i].speed_x;
    y_avg += moths[i].speed_y;
  }
  
  x_avg /= num_moths;
  y_avg /= num_moths;
  
  for (let i = 0; i < num_moths; ++i) {
    moths[i].move(x_avg, y_avg);
    moths[i].display(interA, interB);
  }
  count++;
}



//Moth Class
class Moth {
  
   constructor(interA, interB) {
    this.x = random(width);
    this.y = random(height);
    this.speed_x = random(-moth_speed, moth_speed);
    this.speed_y = random(-moth_speed, moth_speed);
    let color_rand = random(0, 0.5);
    this.color = lerpColor(interA, interB, color_rand);
  }
  
  display(interA, interB) {
    noStroke();
    let color_rand = random(0, 0.5);
    this.color = lerpColor(interA, interB, color_rand);
    fill(this.color);
    square(this.x, this.y, moth_size); //moth background
    let circ = moth_size / 2;
    stroke(0, 0, 0);
    strokeWeight(3);
    //wings
    circle(this.x + moth_size/4, this.y + moth_size/4, circ);
    circle(this.x + 3*moth_size/4, this.y + moth_size/4, circ);
    circle(this.x + moth_size/4, this.y + 3*moth_size/4, circ);
    circle(this.x + 3*moth_size/4, this.y + 3*moth_size/4, circ);
    noStroke();
    circle(this.x + circ, this.y + circ, circ); //connects wings
    fill(interA);
    rect(this.x + circ - 2, this.y, 4, moth_size); //body
  }
  
  move(x_avg, y_avg) {
    this.x += (this.speed_x + 5*x_avg) / 6;
    this.y += (this.speed_y + 5*y_avg) / 6;

    if (this.x >= width || this.x <= 0) {
      this.speed_x *= -1;
    }

    if (this.y >= width || this.y <= 0) {
      this.speed_y *= -1;
    }
  }
}