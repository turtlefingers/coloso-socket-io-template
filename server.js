var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, { cors: { origin: "*" } });
var url = require('url');


console.log("start");

/*=== 원하는 path에 html 파일을 연console.log("start");결 ===*/

app.get('/', function(req, res) {
    let _url = req.url;
    res.sendFile(__dirname + '/index.html');
});


app.use("/", express.static(__dirname + "/"));
app.use("/public", express.static(__dirname + "/public"));


// 소켓 연결 시
io.on('connection', function(socket) {

    console.log("user connected");
  
    socket.emit("hello", 1);

    let onevent = socket.onevent;
    socket.onevent = function(packet) {
        let args = packet.data || [];
        onevent.call(this, packet); // original call

        // 패킷 데이터가 object 가 아니라 string 으로 들어왔을 시 변환
        if(packet.data[1] && typeof packet.data[1] == "string"){
            console.log("packet.data", packet.data);
            packet.data[1] = JSON.parse(packet.data[1]);
        }

        // 아래 모든이벤트 일괄적용을 위한 코드
        packet.data = ["*"].concat(args);

        onevent.call(this, packet); // additional call to catch-all
    };

    // 모든 이벤트 일괄 적용
    socket.on('*', function(event, data){

    });

    /* 테스트 페이지 */
    socket.on('SendTest', function(data) {
        let text = "";
        for(let prop in data){
            if(text != "") text += ", ";
            text += "["+prop + "] " + data[prop];
        }
        // Admin 페이지에 메세지를 전달함
        io.emit("message", { text: "서버로 전송된 데이터\n" + text });
    });
});


/*=== 서버 시작 ===*/
http.listen(3000, function() {
    console.log('listening on *:3000');
});