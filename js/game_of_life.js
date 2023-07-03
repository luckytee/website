let light;
let count;
let ticks;

let cols;
let rows;
let reso = 3;
let grid;
let next;
let slider;


function preload() {
  light = loadTable('data/light.csv', 'csv');
}

function setup() {
  let cnv = createCanvas(600, 600);
  ticks = light.getRowCount();
  count = 0;
  
  cols = width / reso;
  rows = height / reso;
  
  //construct both grid and next
  grid = new Array(cols);
  next = new Array(cols);
  for (let i = 0; i < cols; ++i) {
    grid[i] = new Array(rows);
    next[i] = new Array(rows);
  }
  initialize();
  slider = createSlider(1, 50, 5, 0);
  // slider.parent(cnv);
  slider.position(cnv.position().x + 12, cnv.position().y + 12);
  slider.addClass("mySliders");
}


function draw() {
  
  frameRate(slider.value());
  let light_val = light.getNum(count % ticks, 1);
  
  colorMode(RGB);
  let from1 = color(0, 0, 102);
  let to1 = color(0, 255, 255);
  let interA = lerpColor(from1, to1, light_val/340);
  let from2 = color(255, 255, 0);
  let to2 = color(0, 102, 0);
  let interB = lerpColor(from2, to2, light_val/340);
  background(interA);
  
  count++;
  
  display_grid(interB);
  update_grid(light_val);
  
  fill(interA);
  rect(5,5,95,45);
  fill(0);
  textSize(16);
  text('(frame rate)', 10, 40);
}

function mousePressed() {
  initialize();
}

function initialize() {
  for (let i = 0; i < cols; ++i) {
    for (let j = 0; j < rows; ++j) {
      if (i == 0 || j == 0 || i == cols - 1 || j == rows - 1) {
        grid[i][j] = 0;
      }
      else {
        grid[i][j] = floor(random(2));
      }
      next[i][j] = 0;
    }
  }
}

function display_grid(interB) {
  for (let i = 0; i < cols; ++i) {
    for (let j = 0; j < rows; ++j) {
      if (grid[i][j] == 1) {
        noStroke();
        fill(interB);
        // fill(255, 16, 255);
        circle(i*reso, j*reso, reso);
      }
    }
  }
}

function update_grid(light_val) {
  let growth_hormone = .15;
  let factor = round(light_val / 340 + growth_hormone);
  
  //iterate through grid
  for (let i = 1; i < cols - 1; ++i) {
    for (let j = 1; j < rows - 1; ++j) {
      let live_count = 0;
      
      //iterate through neighbors
      for (let k = - 1; k < 2; ++k) {
        for (let l = - 1; l < 2; ++l) {
          
          //tally live neighbors
          live_count += grid[i + k][j + l];
          
        }
      } //neighbors
      
      live_count -= grid[i][j];
      
      //rules of life
      if (grid[i][j] == 1 && live_count < 2 + (1 - factor)) {
        next[i][j] = 0; //loneliness
      }
      else if (grid[i][j] == 1 && live_count > 3 + factor) {
        next[i][j] = 0; //overpopulation
      }
      else if (grid[i][j] == 0 && live_count == 3 - factor) {
        next[i][j] = 1; //reproduction
      }
      else {
        next[i][j] = grid[i][j]; //stasis
      }
    }
  }//grid
  
  //update
  let temp = grid;
  grid = next;
  next = temp;
  
}//update_grid

