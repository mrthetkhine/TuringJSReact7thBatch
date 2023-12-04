const fs = require('fs');
console.log('Start');
fs.readFile('another.txt','utf-8',(err,data)=>{
    if(!err)
    {
        console.log('Data completed',data.toString());
    }
});
console.log('End');