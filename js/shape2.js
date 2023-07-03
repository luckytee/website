let slider;

function setup() {
    createCanvas(800, 800, WEBGL);
    angleMode(RADIANS);
    slider = createSlider(1, 6, 2, 1);
    slider.addClass("mySliders");
  }
  
  function draw() {
      background(0, 0, 230);
      var numVertices = 100;
  
      stroke(255, 210, 255);
      noFill();
      stroke(0);
  
      // noStroke();
      // fill(0, 0, 255, 20);
  
      orbitControl(.1, .1, .1);
    
    //   rotateX(millis()/10000);
      rotateY(millis()/5000);
    //   rotateZ(millis()/10000);
      rotateX((3 * PI) / 2);
    //   rotateY(4*PI/3);
        rotateZ(PI);
    
  
      //1: SLINKY : p. 061
      beginShape();
      scale(120);
      // let dots;
    
      for(let i = 0; i < 2 * PI; i += PI/16) {
          for (let j = 0; j < PI; j += PI/16) {
              point(
                  cos(i) + cos(j),
                  sin(i),
                  j
              );
          }
      }
      endShape();
  }