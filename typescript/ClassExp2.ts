class Circle
{
    display()
    {
        console.log('Circle');
    }
}
class Rectangle
{
    display()
    {
        console.log('Rectangle');
    }
}
let con = Circle;
let obj:any = new con();
obj.display();

con = Rectangle;
obj = new con();
obj.display();