console.log('hello color-color!');

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5canvas");
}

function draw() {

    var randX = random(0, windowWidth);
    var randY = random(0, windowHeight);

    var redValue = map(randX, 0, windowWidth*3/4, 0, 255);
    var greenValue = map(randY, 0, windowHeight*3/4, 0, 255);

    stroke(redValue, greenValue, 110);
    fill(redValue, greenValue, 100);

    if (keyIsPressed === true) {
        ellipse(randX, randY, 100, 100);
    }
}