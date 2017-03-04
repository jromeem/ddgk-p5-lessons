console.log('hello arrays!');

var numBabies = 100;
var babies = Array(numBabies);

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("p5canvas");

  for (var i = 0; i < numBabies; i++) {
    babies[i] = createVector(random(500), random(500));
  }
  console.log(babies);
  noStroke();
}

function draw() {
  background(255);
  ellipse(200, 200, 100, 100);

  for (var i = 0; i < numBabies; i++) {
    fill(random(255), 200, 100);
    ellipse(babies[i].x, babies[i].y, 20, 20);
  }
}
