let x=0
function setup() {
  //this is where you create canvas
  createCanvas(800, 600);
  rectMode(CENTER)
  
}

function draw() {
 background(0, 0, 255);
  
  
  for (let i = 0; i < 1000; i += 8) {
    
    noFill();
    stroke(0, 255, 128);
    strokeWeight(2);
    ellipse(width/2, height/2, i, i);
    
  }
  
  for (let i = 0; i < height; i += 5) {
    stroke(0, 0, 255);
    line(0, i, mouseX, mouseY);
    line(width, i, mouseX, mouseY);
  }
  
}