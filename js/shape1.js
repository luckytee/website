// let slider;

function setup() {
    createCanvas(600, 600, WEBGL);
    angleMode(RADIANS);
    // slider = createSlider(1, 6, 2, 1);
    // slider.addClass("mySliders");
  }
  
  function draw() {
      background(0, 0, 230);
    //   stroke(255, 210, 255);
      noFill();
      stroke(0);
        scale(200);

    //   RED W/ GREY BACKGROUND
    //   background(50);
    //   stroke(255, 10, 10);
    //   strokeWeight(.99);
      
  
      // noStroke();
      // fill(0, 0, 255, 20);
  
      orbitControl(.1, .1, .1);
      var numVertices = 100;
  
      rotateX(millis()/10000);
      rotateY(millis()/5000);
      rotateZ(millis()/10000);
      rotateX(PI);
      rotateY(4*PI/3);
  
      //1: CIRCLE CROSS P. 045
      beginShape();
  
      // let dots;
    
      for(let i = 0; i < numVertices; i++) {
          for (let j = 0; j < numVertices; ++j) {
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