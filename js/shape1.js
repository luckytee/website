// let slider;

function setup() {
    createCanvas(600, 600, WEBGL);
    angleMode(RADIANS);
  }
  
  function draw() {
      background(0, 0, 255);
      noFill();
      stroke(0);
        scale(200);
  
      orbitControl(.1, .1, .1);
      var numVertices = 100;
  
      rotateX(millis()/10000);
      rotateY(millis()/5000);
      rotateZ(millis()/10000);
      rotateX(PI);
      rotateY(4*PI/3);
  
      //1: CIRCLE CROSS P. 045
      beginShape();
    
      for(let i = 0; i < 2 * PI; i+= PI/64) {
          for (let j = 0; j < PI; j += PI/128) {
              point(
                  sin(j)*cos(i),
                //   sin(j)*sin(slider.value()*i),
                    sin(j)*sin(2*i),
                  cos(j)
              );
          }
      }
      endShape();
  }