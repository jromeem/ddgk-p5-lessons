console.log('hello conditionals-practice!');

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
    strokeWeight(10);
}

function draw() {

    // if the mouse is on the left side of the screen
    // use a red fill

    // if the mouse is on the right side of the screen
    // use a green fill

    // if the mouse is at top of the screen
    // use a blue stroke

    // if the mouse is at the bottom of the screen
    // use a black stroke

    ellipse(mouseX, mouseY, 100, 100);
}
