
// initialize app
var express = require('express');
var app = express();

// all includes
var http = require('http').Server(app);
var io = require('socket.io')(http);

// app config -- using assets
app.use(express.static(__dirname + '/public'));

// wharburg
app.set('port', (process.env.PORT || 5000))

// router
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// new io connection found
io.on('connection', function (socket) {
    console.log('-- NEW USER CONNECTED --');
    socket.on('mousemove', function (data) {
        console.log('user move:', data);
        // this line sends the event (broadcasts it)
        // to everyone except the originating client.
        socket.broadcast.emit('moving', data);
    });
})

// listener
http.listen(app.get('port'), function(){
    console.log('wow. node server starting 💻');
    console.log('✨ ~   http://localhost:5000/  ~✨\n');
    console.log("\n~🎵 Let's go fly a kite 🎵\n");
});