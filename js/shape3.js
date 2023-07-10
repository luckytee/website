// let slider;

function setup() {
    createCanvas(600, 600, WEBGL);
    angleMode(RADIANS);
  }
  
  function draw() {
    background(0, 0, 255);
    noFill();
    stroke(0);
    scale(300);
  
    orbitControl(.1, .1, .1);
  
      rotateX(millis()/10000);
      rotateY(millis()/5000);
      rotateZ(millis()/10000);
    // rotateX(PI/2);
    // rotateZ(PI/4);
    // //   rotateY(4*PI/3);
    // translateX(PI);
       
    //   // UK PAVILLION P 163
    // beginShape();
    // for(let i = 0; i < PI; i += PI/32) {
    //     for (let j = 0; j < 5 * PI; j += PI/6) {
    //         point(
    //             j,
    //             (2 + (sin(j)/3)) * cos(i),
    //             (2 + (sin(j)/3)) * sin(i),
    //         );
    //     }
    // }
    // endShape();

    beginShape();
    for (let i = 0; i < 2 * PI; i+= PI / 64) {
        for (let j = 0; j < PI; j += PI/128) {
            point(
                sin(sin(sin(j)*cos(i))),
                sin(sin(sin(j)*sin(i))),
                sin(sin(cos(j))/(13/10))
            );
        }
    }
    endShape();

    
  }