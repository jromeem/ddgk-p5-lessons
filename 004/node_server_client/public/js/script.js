var clients = {};
var cursors = {};
var socket = io();

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5canvas");

  socket.on('moving', function (data) {
    // saving the current client state
    clients[data.id] = data;
    clients[data.id].updated = $.now();
  });
}

function draw() {
  background(100);

  // emit a mouse move every other draw frame
  socket.emit('mousemove',{
    'x': mouseX,
    'y': mouseY,
    'id': id
  });

  // draw all the clients
  for (var id in clients) {
    console.log(clients[id]);
    ellipse(clients[id].x, clients[id].y, 100,100);
  }
  ellipse(mouseX, mouseY, 100, 100);
}