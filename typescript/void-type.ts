function hello()
{
    console.log('Hello');
}
function greet()
{
    console.log('Greet');
}
type Fn  = ()=>void;
let fn:Fn = hello;
fn();

fn = greet;
fn();