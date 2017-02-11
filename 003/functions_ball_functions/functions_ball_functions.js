console.log('hello functions_ball_functions!');

var ballX = 50;
var speed = 3;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5canvas");
}

function draw() {
    background(100);

    // ball functions
    ballDisplay();
    ballMove();
    ballBounce();
}

function ballDisplay() {
  noStroke();
  fill(100, 200, 100);
  ellipse(ballX, height/2, 100, 100);
}

function ballMove() {
  ballX = ballX + speed;
}

function ballBounce() {
  if (ballX > width || ballX < 0) {
    speed = speed * -1;
  }
}
