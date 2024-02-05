/*
interface Human{
    name: string; 
    age: number 
}*/
/*
type Human = {
    name: string;
    age :number;
}
*/
class Human
{
    name : string;
    age: number;
    constructor(name:string, age:number)
    {
        this.name = name;
        this.age = age;
    }
}
function greet(person:Human) {
  console.log( "Hello " + person.name);
}
greet({
    name : 'TK',
    age: 39
})