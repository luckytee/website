function setup() {
    createCanvas(400, 500);
    background(255, 240, 206);
    
    strokeWeight(0.25);
    stroke(0, 204, 204);
    for (let i = 20; i < width; i += 20) {
      let j = 0;
      line(i, j, i, height);
    }
    for (let i = 20; i < height; i += 20) {
      let j = 0;
      line(j, i, width, i);
    }
   
    strokeWeight(3);
    stroke(0, 0, 153);
  }
  
  function draw() {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  function doubleClicked() {
    background(255, 240, 206);

    strokeWeight(0.25);
    stroke(0, 204, 204);
    for (let i = 20; i < width; i += 20) {
      let j = 0;
      line(i, j, i, height);
    }
    for (let i = 20; i < height; i += 20) {
      let j = 0;
      line(j, i, width, i);
    }

    strokeWeight(3);
    stroke(0, 0, 153);
  }
  
  function mouseClicked() {
    strokeWeight(random(0, 1.5));
    let r = random(0, 1);
    let start = color(102, 102, 0);
    let end = color(120, 120, 120);
    stroke(lerpColor(start, end, r));
  }
  
  function keyPressed() {
    strokeWeight(12);
    stroke(0, 255, 128, 30);
  }
  
  function keyReleased() {
    strokeWeight(1.2);
    stroke(0, 0, 0);
  }