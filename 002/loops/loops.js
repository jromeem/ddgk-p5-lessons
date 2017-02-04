console.log('hello loops!');
function setup() {
    var canvas = createCanvas(700, 500);
    canvas.parent("p5canvas");
    noFill();
    strokeWeight(2);
}

function draw() {
    background(255);

    stroke(100);
    noFill();
    ellipse(175, 250, 0, 0);
    ellipse(175, 250, 25, 25);
    ellipse(175, 250, 50, 50);
    ellipse(175, 250, 75, 75);
    ellipse(175, 250, 100, 100);
    ellipse(175, 250, 125, 125);
    ellipse(175, 250, 150, 150);
    ellipse(175, 250, 175, 175);
    ellipse(175, 250, 200, 200);
    ellipse(175, 250, 225, 225);

    // stroke(100);
    // noFill();
    // for (var i = 0; i < 10; i++)
    // {
    //     ellipse(175, 250, i*25, i*25);
    // }

    for (var i = 20; i > 0; i-=2)
    {
        noStroke();
        fill(255, 255-i*4, 255-i*4);
        ellipse(525, 250, i*12, i*12);
    }
}
