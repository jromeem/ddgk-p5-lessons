console.log('hello mazer practice!');

var squareSize = 20;
var lineWeight = 1;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5canvas");
  noLoop();
  stroke(255);
  strokeWeight(lineWeight);
}

function draw() {
  background(50, 100, 255);

  // for each row going across
  for (var i = 0; i < windowWidth/squareSize; i++) {
    // for each column going down
    for (var j = 0; j < windowHeight/squareSize; j++) {
      
      // calculate the top left x,y cordinates
      // calculate the bottom right x,y cordinates

      // make a binary decision: 1/0

      // if decision was 1:
      // -  draw a diagonal line from top left to bottom right
      // else decision was 0:
      // -  draw a diagnoal line from top right to bottom left

    }
  }
}
