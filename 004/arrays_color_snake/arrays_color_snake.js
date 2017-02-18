console.log('hello arrays_color_snake!');

var colorWheel = 0;
var tailLength = 50;
var xpos = [];
var ypos = [];

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5canvas");
  colorMode(HSB, 100);
  rectMode(CENTER);

  // initalize the arrays
  for (var i = 0; i < tailLength; i++) {
    xpos.push(0);
    ypos.push(0);
  }
}

function draw() {
  background(255);

  // shift all the values
  for (var i = 0; i < tailLength; i++) {
    xpos[i] = xpos[i+1];
    ypos[i] = ypos[i+1];
  }

  // set the x and y positions
  xpos[tailLength - 1] = mouseX;
  ypos[tailLength - 1] = mouseY;

  // draw the entire array
  for (var i = 0; i < tailLength; i++) {
    noStroke();
    fill(colorWheel, 70 - i, 100);
    ellipse(xpos[i], ypos[i], i, i);
  }

  // cycle through the color wheel
  colorWheel++;
  colorWheel %= 100;
}
