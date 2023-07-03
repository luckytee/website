function setup() {
    createCanvas(600, 400);
    background(0);
  }
  
  function draw() {
    let x = mouseX;
    let y = mouseY;
    let noiseValue = noise(x, y);
    set(x, y, color(noiseValue * 255));
    updatePixels();
  }