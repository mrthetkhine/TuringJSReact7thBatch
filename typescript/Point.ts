interface Displayable
{
    display:()=>void;
}
class Point implements Displayable
{
    constructor(public x:number,public y:number)
    {
        console.log('Point constructor');
    }
    
    display()
    {
        console.log('x ',this.x,' y ',this.y);
    }
    
}
class ThreeD extends Point
{
    constructor(public x:number,public y:number,public z:number)
    {
        super(x,y);
        console.log('ThreeD constructor');
    }
    display()
    {
        super.display();
        console.log( 'z ',this.z);
    }
}
let p = new ThreeD(10,20,30);
p.display();