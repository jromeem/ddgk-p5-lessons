console.log('hello variables-practice!');

var xvalue = 50;
var yvalue = 10;

var xspeed = 1;
var yspeed = 1;

function setup()
{
    var canvas = createCanvas(500, 500);
    canvas.parent("p5canvas");
}

function draw()
{
    background(100);
    ellipse(xvalue, 200, 100, 100);

    xvalue = xvalue + xspeed;
    xspeed = xspeed + 1;

    if (xvalue >= width - 50 || xvalue < 0 + 50)
    {
        xspeed = xspeed * -0.95;
    }

}
