function hello()
{   
    console.log('Hello');
}
hello.some="Data";
type DescribableFunction = {
    some: string;
    (): void;
};
let fun:DescribableFunction= hello;
fun();