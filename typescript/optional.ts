function process1(obj:{
    name :string,
    age?:number
})
{
    console.log('Name ',obj.name);
    if(obj.age !=undefined)
    {
        console.log( obj.age* 2);
    }
  
}
process1({
    name :'TK'
});
process1({
    name : "Tk",
    age :10
})