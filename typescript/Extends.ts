interface Color
{
    color:string;
}
interface BorderedColor extends Color
{
    border:number;
}
type BColor = Color & { 
    border:number;
}

