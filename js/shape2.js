function setup() {
    createCanvas(800, 800, WEBGL);
    angleMode(RADIANS);
  }
  
  function draw() {
      background(0, 0, 255);
  
      stroke(255, 210, 255);
      noFill();
      stroke(0);
      scale(2);
  
      // noStroke();
      // fill(0, 0, 255, 20);
  
      orbitControl(.1, .1, .1);
    
      // translateZ(PI);

      rotateY((millis()/4000));
    
      rotateX((millis()/2000));
    
      rotateZ((millis()/2000));
    
  
      //MOGULS P 149
      beginShape();
      scale(120);
      // let dots;
    
      for(let i = -PI/2; i < PI/2; i += PI/64) {
          for (let j = 0; j < PI; j += PI/64) {
              point(
                  j,
                  sin(i),
                  sin(j) * cos(i) * cos(j)
              );
          }
      }
      endShape();
  }