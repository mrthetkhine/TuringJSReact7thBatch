function greet(msg:string)
{
    console.log(msg.toUpperCase());
}
greet('hello');

function add(a:number,b:number):number
{
    return a+b;
}
console.log(add(1,2));
async function getFavoriteNumber(): Promise<number> {
    return 26;
}
getFavoriteNumber()
    .then(data=>data*2)
    .then(console.log)