// http://algorithmicbotany.org/papers/abop/abop-ch4.pdf
console.log('hello phyllotaxis!');

var numFlorets = 1000;
var scaleFloret = 15;
var angleFloret = 137.501;
var seedSize = 10;
// var hsbRange = 100;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5canvas");
  noStroke();
  // colorMode(HSB, hsbRange);
}

function draw() {
  background(255);
  translate(width/2, height/2);

  // create each seed
  for (var i = 0; i < numFlorets; i++) {
    var radius = scaleFloret * sqrt(i);
    var angle = i * angleFloret;

    var posx = radius * cos(angle);
    var posy = radius * sin(angle);

    // var colorVal = map(i, 0, numFlorets, 0, hsbRange);
    // fill(colorVal, hsbRange, hsbRange);

    fill(0);
    ellipse(posx, posy, seedSize, seedSize);
  }

  // rotate all the seeds slowly
  angleFloret += 0.00001;
}
