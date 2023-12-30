const net = require("net");
const readline = require("readline")

let server = net.createServer();
server.listen(9000, () => console.log("Listen on port 9000"));

server.on("connection",socket=>{
    socket.on('data',(data)=>{
        console.log("Data from client "+data);
    })
    socket.write("Hello "+ new Date()+"\r\n");
    socket.end();
});