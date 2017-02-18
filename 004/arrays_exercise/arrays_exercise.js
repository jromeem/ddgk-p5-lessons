console.log('hello arrays_exercise!');

var grid = [];
var gridHeight = 500;
var gridWidth = 500;
var squareSize = 50;

function setup() {
  var canvas = createCanvas(gridWidth, gridHeight);
  canvas.parent("p5canvas");
  noStroke();

  // initialize the array
  for (var i = 0; i < gridWidth/squareSize; i++) {
    grid[i] = new Array(gridWidth/squareSize);
    for (var j = 0; j < gridHeight/squareSize; j++) {
      // get a random color
      grid[i][j] = color(100, random(255), 200);
    }
  }

}

function draw() {

  // draw the grid
  for (var i = 0; i < gridWidth/squareSize; i++) {
    for (var j = 0; j < gridHeight/squareSize; j++) {
      var thisColor = grid[i][j];
      fill(thisColor);
      rect(i*squareSize, j*squareSize, 100, 100);
    }
  }
  fill(200, 0, 0);
  rect(mouseX-25, mouseY-25, 50, 50);
}
