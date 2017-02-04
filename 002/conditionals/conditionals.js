console.log('hello conditionals!');
function setup() {
    var canvas = createCanvas(1000, 600);
    canvas.parent("p5canvas");
    noStroke();
}

function draw() {
    background(200);

    if (mouseX < 500)
    {
        fill(250, 100, 0);
    }

    if (mouseX > 500)
    {
        fill (100, 200, 0);
    }

    if (key === 's') {
        strokeWeight(10);
        stroke(100, 100, 100);
        noFill();
    }

    if (key === 'q') {
        noStroke();
        fill(100, 100, 100);
    }


    ellipse(mouseX, mouseY, 100, 100);
}
