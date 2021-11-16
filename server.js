var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, { cors: { origin: "*" } });
var url = require('url');

app.use("/", express.static(__dirname + "/"));

// 소켓 연결 시
io.on('connection', function(socket) {

    console.log("user connected");

    let onevent = socket.onevent;
    socket.onevent = function(packet) {
        let args = packet.data || [];
        onevent.call(this, packet); // original call

        // 아래 모든이벤트 일괄적용을 위한 코드
        packet.data = ["*"].concat(args);

        onevent.call(this, packet); // additional call to catch-all
    };

    // 모든 이벤트 일괄 적용
    socket.on('*', function(event, data){
      console.log(event,data);
      io.emit(event, data);
    });
});


/*=== 서버 시작 ===*/
http.listen(3000, function() {
    console.log('listening on *:3000');
});