let w = 640;
let h = 480;
let capture;
let poseNet;
let faceX;
let faceY;

function setup() {
  createCanvas(w, h);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
  poseNet = ml5.poseNet(capture, modelReady);
  poseNet.on('pose', posesReady);
}

function posesReady(poses) {
  // console.log(poses);
  faceX = poses[0].pose.keypoints[0].position.x;
  faceY = poses[0].pose.keypoints[0].position.y;
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  background(255);
  image(capture, 0, 0, w, h);
  
  strokeWeight(w/80);
  fill(255, 255, 0);
  circle(faceX, faceY, w/3);
  fill(0);
  
  //eyes
  ellipse(faceX - w/22, faceY - w/22, w/42, w/14);
  ellipse(faceX + w/22, faceY - w/22, w/42, w/14);
  
  //smile
  let diam = w/3;
  let startAng = 0.1 * PI
  let endAng = 0.9 * PI
  let smileDiam = 0.6 * diam;
  noFill();
  arc(faceX, faceY, smileDiam, smileDiam, startAng, endAng);
}