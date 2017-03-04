console.log('hello phyllotaxis_practice!');

var numberOfSeeds = 200;
var fibAngle = 137.5;
var n = 1;
var scaling = 15;
var increasing = 0;


function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("p5canvas");
  noStroke();
}

function draw() {
  background(255);
  translate(width/2, height/2);

  // calculate all radi, and angles for all seeds
  for (var i = 0; i < numberOfSeeds; i++) {
    var angle = i * fibAngle;
    var radius = scaling * sqrt(i);
    var posx = radius * cos(angle);
    var posy = radius * sin(angle);
    fill(0);
    ellipse(posx, posy, 9, 9);
  }
  fibAngle += 0.0001;
}






