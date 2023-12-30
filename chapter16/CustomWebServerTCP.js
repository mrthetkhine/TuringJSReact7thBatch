const net = require("net");
const readline = require("readline")

let server = net.createServer();
server.listen(9000, () => console.log("Listen on port 9000"));

server.on("connection",socket=>{
    socket.on('data',(data)=>{
        console.log("Data from client >>");
        readRequest(data);
        console.log();
        writeResponse(socket);
        
    });
   
});
function readRequest(data) {
    let requestData = data.toString();
    let lines = requestData.split("\r\n");
    let statusLine = lines[0];
    let statusData = statusLine.split(" ");
    let path = statusData[1];
    console.log("Path ", path);
}

function writeResponse(socket) {
    let helloWorld = "<h1>Hello World<h1>";
    let response = "HTTP/1.1 200 OK\r\n";
    response += "Content-Type:text/html\r\n";
    response += `Content-Length:${helloWorld.length}\r\n\r\n`;
    response += helloWorld;
    socket.write(response);
    socket.end();
}

