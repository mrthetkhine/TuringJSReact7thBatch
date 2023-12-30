const os = require("os");
const path = require("path");

/*
console.log('Cwd ',process.cwd());
console.log('Env ',process.env);
console.log('Cpus ',os.cpus());
console.log('network ',os.networkInterfaces());
*/
let  p = '/hello/hello.txt';
console.log('Base ',path.basename(p));
console.log('Ext ',path.extname(p));
console.log('Dir ',path.dirname(p));
console.log('Delimit ',path.delimiter);
console.log('Seperator ',path.sep);