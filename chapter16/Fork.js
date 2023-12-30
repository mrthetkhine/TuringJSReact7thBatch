const child_process = require("child_process");
let child = child_process.fork(`${__dirname}/child.js`);

child.send({data:'Hello World'});
child.on("message", message => { 
    console.log(message);
    child.disconnect();
});