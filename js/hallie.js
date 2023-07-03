let ceramic;
let tex;

function preload() {
  ceramic = loadModel('objects/hallie.obj');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  // natural = loadImage('natural.png');
  tex = loadImage('images/hallie_ceramic.jpg');
}

function draw() {
  background(0);
  orbitControl();
  translate(-10, 200, 20);
  rotateY(frameCount * 0.01);
  rotateX(135);
  rotateZ(270);
  scale(2500);
  
  model(ceramic);
  normalMaterial();
  texture(tex);
}