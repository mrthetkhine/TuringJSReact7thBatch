const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    let endpoint = url.parse(req.url).pathname;
    console.log('endpoint ',endpoint);
    if(endpoint.includes("."))
    {
        serveFile(endpoint, res);
    }
    else
    {
        serveDefault(res);
    }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

function serveDefault(res) {
    res.writeHead(200);
    let obj = {
        name: "TK",
        age: 39
    };
    //res.write(JSON.stringify(obj));
    res.end("<h1>Hello World</h1>");
}

function serveFile(endpoint, res) {
    console.log("File");
    let filename = endpoint.substring(1);
    let stream = fs.createReadStream(filename);
    stream.once("readable", () => {
        res.setHeader("Content-Type", 'text/html');
        res.writeHead(200);
        stream.pipe(res);
    });
    stream.on("error", (err) => {
        res.setHeader("Content-Type", "text/plain; charset=UTF-8");
        res.writeHead(404);
        res.end(err.message);
    });
}
