console.log('hello first_example!');

var ellipse_x = 200;
var ellipse_y = 200;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5canvas");
}

function draw() {
    background(255);
    ellipse(ellipse_x, ellipse_y, 100, 100);
}

function mouseClicked() {
    ellipse_x = random(0, width);
    ellipse_y = random(0, height);
}