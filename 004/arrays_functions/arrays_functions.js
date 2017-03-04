console.log('hello arrays_functions!');

var ballX = 0;


function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5canvas");
}

function draw() {
    background(100);
    ellipse(ballX, 200, 100, 100);
    ballX++;
}
