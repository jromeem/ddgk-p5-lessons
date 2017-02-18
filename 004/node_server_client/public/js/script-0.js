// /* script.js */
// (function() {

//     ///////////////////////////
//     // some canvas setup ugh //
//     ///////////////////////////

//     // i freakin hate hungarians :(
//     var $doc = $(document),
//         $win = $(window);
//         // $canvas = $('#park'),   // element
//         // context = $canvas[0].getContext('2d');

//     // dynamic full screen
//     // window.addEventListener('resize', resizeCanvas, false);
//     //     function resizeCanvas() {
//     //         $canvas[0].width = window.innerWidth;
//     //         $canvas[0].height = window.innerHeight;
//     //         draw();
//     // } resizeCanvas();

//     // // hiding your cursor
//     // $("body").css('cursor', 'url(../img/kite.png),auto');


//     /////////////////
//     // socket shit //
//     /////////////////

//     // shh listening 👀👂))
//     var socket = io();

//     // create unique id
//     var id = Math.round($.now()*Math.random());
//     var clients = {};   // fliers
//     var cursors = {};   // their kites
//     var lastEmit = $.now();
    
//     // capture movement
//     socket.on('moving', function (data) {

//         // a new user has come online
//         // draw a cursor for them
//         // if (!(data.id in clients)) {
//         //     cursors[data.id] = $('<div class="cursor">').appendTo('#cursors');
//         // }

//         // move the mouse pointer
//         cursors[data.id].css({
//             'left': data.x,
//             'top' : data.y
//         });

//         // saving the current client state
//         clients[data.id] = data;
//         clients[data.id].updated = $.now();
//     });

//     // capture current movements
//     $doc.on('mousemove',function(e){
//         if($.now() - lastEmit > 30){
//             socket.emit('mousemove',{
//                 'x': e.pageX,
//                 'y': e.pageY,
//                 'id': id
//             });
//             lastEmit = $.now();
//         }
//     });

//     // kill clients after ten seconds of inactivity
//     setInterval(function(){
//         for(ident in clients){
//             if($.now() - clients[ident].updated > 10000){
//                 // last update was more than 10 seconds ago: kill user
//                 cursors[ident].remove();
//                 delete clients[ident];
//                 delete cursors[ident];
//             }
//         }
//     },10000);
// })();

// i freakin hate hungarians :(
var $doc = $(document),
    $win = $(window);

// shh listening 👀👂))
var socket = io();

// create unique id
var id = Math.round($.now()*Math.random());
var clients = {};   // fliers
var cursors = {};   // their kites
var lastEmit = $.now();

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.parent("park");

    // hiding your cursor
    $("body").css('cursor', 'none');
    
    /////////////////
    // socket shit //
    /////////////////

    // capture movement
    socket.on('moving', function (data) {

        // a new user has come online
        // draw a cursor for them
        if (!(data.id in clients)) {
            cursors[data.id] = $('<div class="cursor">').appendTo('#cursors');
        }

        // move the mouse pointer
        cursors[data.id].css({
            'left': data.x,
            'top' : data.y
        });

        // saving the current client state
        clients[data.id] = data;
        clients[data.id].updated = $.now();
    });

    // capture current movements
    $doc.on('mousemove',function(e){
        if($.now() - lastEmit > 30){
            socket.emit('mousemove',{
                'x': e.pageX,
                'y': e.pageY,
                'id': id
            });
            lastEmit = $.now();
        }
    });
}

// do all canvas drawing IN HERE
function draw() {
    background(255);
    ellipse(mouseX, mouseY, 100, 100);

    // draw clients
    for (var id in clients) {
        console.log(clients[id]);
        ellipse(clients[id].x, clients[id].y, 100,100);
    }
}
