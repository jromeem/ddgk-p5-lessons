console.log('hello mazer!');

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

  // create the grid
  for (var i = 0; i < windowWidth/squareSize; i++) {
    for (var j = 0; j < windowHeight/squareSize; j++) {
      
      // top left corner
      var xLeft = i*squareSize;
      var yLeft = j*squareSize;

      // bottom right corner
      var xRight = i*squareSize+squareSize;
      var yRight = j*squareSize+squareSize;

      // top right same as (xRight, yLeft)
      // bottom left same as (xLeft, yRight)

      // make a decision
      var pick = int(random(2));

      // pick a diagonal
      if (pick === 1) {
        // draw a line from top left to bottom right
        line(xLeft, yLeft, xRight, yRight);
      } else {
        // draw a line from top right to bottom left
        line(xRight, yLeft, xLeft, yRight);
      }
    }
  }

}
