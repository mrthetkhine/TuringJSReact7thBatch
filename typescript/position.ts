type Position ={
     x:number;
     y:number;
     z?:number;
}
function showLocation(pos:Position)
{
    if(pos.z)
    {
        console.log(pos.z+1);
    }
    
}
showLocation({
    x:10,
    y:20,
    z:20
})