console.log('hello loops-practice!');

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("p5canvas");
    noFill();
}

function draw() {
    background(255);

    // from starting at 60; down to 0; decrementing 2 each time
    // - using a blue stroke
    // - draw a circle that goes from the top left to the bottom right
    for (var i = 60; i > 0; i-=2)
    {
        stroke(0, 0, 255);
        ellipse(i*10, i*10, 100, 100);
    }

    // from starting at 0; go up to 60; incrementing 2 each time
    // - using a red stroke
    // - draw a circle that goes from the top right to the bottom left
    for (var i = 0; i < 60; i+=2)
    {
        stroke(255, 0, 0);
        ellipse(600-i*10, i*10, 100, 100);
    }
}
