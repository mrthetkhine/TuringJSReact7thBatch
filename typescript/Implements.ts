interface Flyable
{
    fly:()=>void;
}
class Bird implements Flyable
{
    fly()
    {
        console.log('Bird Fly');
    }
}
class Aeroplane implements Flyable
{
    fly()
    {
        console.log('Aerplane Fly');
    }
}
let obj:Flyable= new Bird();
obj.fly();

obj = new Aeroplane();
obj.fly();