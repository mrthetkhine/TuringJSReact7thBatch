function delay(x)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Code executed another 3 seconds');
            resolve(x+200);
        },3000);
    });
}
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Code executed after 3 seconds');
        resolve(100);
    },3000);
}).then(x=>x+1)
  .then(delay)
  .then(console.log)
console.log('Done');