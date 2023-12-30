const fs = require('fs');
const util = require("util");
/*
fs.readFile('hello.js','utf-8',(err,data)=>{
    if(!err)
    {
        console.log('File read completed ',data.toString());
    }
});
console.log('After file read');
*/
const pfs = { // Promise-based variants of some fs functions
    readFile: util.promisify(fs.readFile)
};
/*
pfs.readFile('hello.js','utf-8')
    .then(data=>console.log(data.toString()));
*/
async function readData()
{
    let data = await pfs.readFile('hello.js','utf8');
    console.log('Data ',data);
}
readData();