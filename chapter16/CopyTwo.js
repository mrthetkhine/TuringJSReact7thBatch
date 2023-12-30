const fs = require('fs');

//console.log("Param ",process.argv);
let source = process.argv[2];
let destination = process.argv[3];

async function copy(source,destination)
{
    let input = fs.createReadStream(source);
    let output = fs.createWriteStream(destination);

    for await (const chunk of input) {
        output.write(chunk);
    }
    console.log('Copied completed');
}
copy(source,destination);