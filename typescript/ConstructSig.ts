class Human
{
    name: string
    constructor(name:string)
    {
        this.name=name;
        console.log('Constructor Human');
    }
}
class Another
{
    name: string
    constructor(name:string)
    {
        this.name=name;
        console.log('Constructor Another');
    }
}
type Construct ={
    new (s:string):Another|Human
};
let con:Construct =Human;
let obj = new con('TK');
console.log(obj);

con = Another;
obj = new con('Another');
console.log(obj);