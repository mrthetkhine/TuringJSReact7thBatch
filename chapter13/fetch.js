const https = require("https");

function getText(url, callback)
{
    request = https.get(url);
    request.on("response", response => {
        let httpStatus = response.statusCode;
        response.setEncoding("utf-8");
        let body = "";
        response.on("data", chunk => { body += chunk; });
        response.on("end", () => {
            callback(body);
        });
    });
}

getText('https://jsonplaceholder.typicode.com/todos/1',(data)=>console.log('Data ',data));