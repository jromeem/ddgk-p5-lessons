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
  
  cornerX = mouseX;
  cornerY = mouseY;

  // make a variable with the absolute distance between the mouse and the randomX
  // make a variable with absolute distance between the mouse and the randomY
  // make a variable that contains the minimum distance between the two previous distances
  // calculate the opposite corners: cornerX and cornerY

  //** end of your code **//
}