function preload() {
    ceramic = loadModel('objects/clare.obj');
  }
  
  function setup() {
    createCanvas(500, 500, WEBGL);
    describe('ceramic object');
    natural = loadImage('images/natural.png');
  }
  
  function draw() {
    background(0);
    orbitControl();
    rotateY(frameCount * 0.005);
    rotateX(135);
    rotateZ(270);
    scale(15);
    let amb = (255, 50, 50);
    ambientLight(amb);
    let light = color(50, 50, 255);
    pointLight(light, -width/2, -height/2, width/2);
    normalMaterial();
    texture(natural);
    specularMaterial(100);
    model(ceramic);
  }