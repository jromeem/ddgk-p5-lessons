console.log('hello variables-practice!');

var numFrogs = 100;
var frogLength = 10;
var numFrogsFull = 0;

var numberOfFlies = 1000;
var flyLength = 1;
var numFliesEaten = 0;

var totalScore = 0;
var isGameOver = false;
var secondsLeft = 30.0;

function setup()
{
    var canvas = createCanvas(500, 500);
    canvas.parent("p5canvas");

    console.log("numFrogs", numFrogs);
    console.log("frogLength", frogLength);
    console.log("numFrogsFull", numFrogsFull);

    console.log("numberOfFlies", numberOfFlies);
    console.log("flyLength", flyLength);
    console.log("numFliesEaten", numFliesEaten);

    console.log("totalScore", totalScore);
    console.log("isGameOver", isGameOver);
    console.log("secondsLeft", secondsLeft);
}

function draw()
{
    background(255);
}
