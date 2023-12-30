const { spawn } = require('child_process');
const child = spawn('pwd',{
    encoding: "utf8"
});
child.on('error', function (err) {
    console.log('error '+err);
  });
child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});
  
child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
});