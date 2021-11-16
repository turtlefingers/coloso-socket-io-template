var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, { cors: { origin: "*" } });

app.use("/", express.static(__dirname + "/"));

// 소켓 연결 시
io.on('connection', function(socket) {

    console.log("user connected");

    socket.on('value', function(value){
      console.log(value);
      io.emit('value', value);
    });
});


/*=== 서버 시작 ===*/
http.listen(3000, function() {
    console.log('listening on *:3000');
});