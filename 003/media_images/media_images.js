console.log('hello media_images!');

// image variables
var wings;
var obama;

var flyingObama_x = 500/2; // x position
var flyingObama_y = 500/2; // y position
var flyingObama_w = 200;   // width
var flyingObama_h = 200;   // height
var flyingObama_s = 2;     // speed

var wingsWidth = flyingObama_w;
var wingsflapSpeed = 20;
var wingXOffsset = 0;
var wingYOffset = 50;

function preload() {
  wings = loadImage("assets/wings.png");
  obama = loadImage("assets/obama.png");
}

function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("p5canvas");
  imageMode(CENTER);
}

function draw() { 
  background(255);

  flapWings();
  flyAround();
  displayFlyingObama();
  
}

function flapWings() {
  wingsWidth += wingsflapSpeed;
  if (wingsWidth < 50 || wingsWidth > flyingObama_w) {
    wingsflapSpeed = -wingsflapSpeed;
  }
}

function flyAround() {
  flyingObama_x = flyingObama_x + flyingObama_s;
  flyingObama_y = flyingObama_y + flyingObama_s;
  if (flyingObama_x > width || flyingObama_x < 0) {
    flyingObama_s = -flyingObama_s;
  }
}

function displayFlyingObama() {
  image(wings, flyingObama_x, flyingObama_y-wingYOffset, wingsWidth, flyingObama_h*2/3);
  image(obama, flyingObama_x, flyingObama_y, flyingObama_w, flyingObama_h);
}
