console.log('hello functions_exercise!');

// global variables
var randomX;
var randomY;
var squareSize;

var cornerX;
var cornerY;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5canvas");

  // make random values
  randomX = random(0, width);
  randomY = random(0, height);

  rectMode(CORNERS);
}

function draw() {
  background(100);

  // find the corners
  findCorners();
  rect(randomX, randomY, cornerX, cornerY);
}

function findCorners() {
  //** write your code here **//

  /*****************************************
    considering a normal Cartesian graph, the
    quadrants are as follows:

                    |
                    |
           Q2       |        Q1
                    |
     ---------------+--------------------
                    |
                    |
           Q3       |        Q4
                    |

  *****************************************/
  
  // make a variable with the absolute distance between the mouse and the randomX
  var horizontalDistance = abs(mouseX - randomX);

  // make a variable with absolute distance between the mouse and the randomY
  var verticalDistance = abs(mouseY - randomY);
  
  // make a variable that contains the minimum distance between the two previous distances
  var smallestSize = min(verticalDistance, horizontalDistance);

  // if the mouse is in quadrant 1
  if (mouseX > randomX && mouseY < randomY) {
    // calculate cornerX and cornerY
    cornerX = randomX + smallestSize;
    cornerY = randomY - smallestSize;
  }

  // if the mouse is in quadrant 2
  if (mouseX < randomX && mouseY < randomY) {
    // calculate cornerX and cornerY
    cornerX = randomX - smallestSize;
    cornerY = randomY - smallestSize;
  }

  // if the mouse is in quadrant 3
  if (mouseX < randomX && mouseY > randomY) {
    // calculate cornerX and cornerY
    cornerX = randomX - smallestSize;
    cornerY = randomY + smallestSize;
  }

  // if the mouse is in quadrant 4
  if (mouseX > randomX && mouseY >randomY) {
    // calculate cornerX and cornerY
    cornerX = randomX + smallestSize;
    cornerY = randomY + smallestSize;
  }
  //** end of your code **//
}