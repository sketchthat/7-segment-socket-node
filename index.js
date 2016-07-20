var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var segment = require('7-segment');

var draw = new segment(0, 7, 5, 4, 1, 2, 3, 6);

var segmentCounter = 0;


app.get('/', function(req, res){
   res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', function(socket){
    
    
    socket.on('disconnect', function(socket){
        
    });

    socket.on('button press', function(){
        segmentCounter++;

        if (segmentCounter >= 10) {
            segmentCounter = 0;
        }

        draw.display(segmentCounter);

        console.log('Update Button: ' + segmentCounter);
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});