function add(x:number,y:number):number
{
    return x+y;
}
function mult(x:number,y:number):number
{
    return x*y;
} 
type Fn = (a:number,b:number)=>number;
let fn : Fn = add;
console.log(fn(1,2));
fn = mult;
console.log(fn(3,2));

function callback(data:number)
{
    console.log('Callback ',data);
}
type CallBack = (a:number)=>void;
function processLater(callback:CallBack)
{
    setTimeout(()=>{
        callback(100);
    },1000);
}
processLater(callback);