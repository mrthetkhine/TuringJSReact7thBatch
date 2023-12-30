const child_process = require("child_process");
const util = require("util");
const execP = util.promisify(child_process.exec);
/*
let listing = child_process.execSync("ls -l",
                                    {encoding: "utf8"});
*/
execP("ls -la",{
    encoding: "utf8"
}).then(data=>console.log(data))