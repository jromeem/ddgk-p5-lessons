console.log('hello color-color!');

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
}

function draw() {
    // background(255);

    var redValue = map(mouseX, 0, windowWidth*3/4, 0, 255);
    var blueValue = map(mouseY, 0, windowHeight*3/4, 0, 255);

    stroke(redValue, 110, blueValue);
    fill(redValue, 100, blueValue);

    ellipse(mouseX, mouseY, 100, 100);
}

