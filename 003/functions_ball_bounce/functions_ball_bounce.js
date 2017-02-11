console.log('hello functions_ball_bounce!');

var ballX = 50;
var speed = 3;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5canvas");
}

function draw() {
    background(100);
    noStroke();
    fill(255, 100, 100);
    ellipse(ballX, height/2, 100, 100);
    ballX = ballX + speed;
      if (ballX > width || ballX < 0) {
    speed = speed * -1;
  }
}