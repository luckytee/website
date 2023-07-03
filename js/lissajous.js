function setup() {
    frameRate(10);
    createCanvas(400, 400);
  }
  
  let x = 50;
  let y = 50;
  let t = 0;
  
  function draw() {
    background(0);
    
    fill(102, 204, 0);
    noStroke();
    
    for (i = 0; i < 50; i++) {
  
        x = 160*sin(1*t+PI/2);
        y = 160*sin(3*t);
      
      square(width/2+y, height/2+x, 8);
      
        // t+=17;
      t += mouseX/10;
    }
  }