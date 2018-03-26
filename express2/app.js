const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);
var sockets = [];

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

io.on('connection',(socket)=>{
  sockets.push(socket);
  console.log("Connection made");
  socket.on("Event",(data)=>{
    sockets.forEach((i)=>{
      i.emit("Event_2",data);
    });
  });
  
});

server.listen(8080);
