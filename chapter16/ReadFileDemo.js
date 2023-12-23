const fs = require('fs');
fs.readFile('hello.js','utf-8',(err,data)=>{
    if(!err)
    {
        console.log('File read completed ',data.toString());
    }
});
console.log('After file read');