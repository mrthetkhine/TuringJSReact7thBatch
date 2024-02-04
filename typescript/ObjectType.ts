
type Human = {
    name : string,
    age : number
}
let obj:Human = {
    name: 'TK',
    age : 39
};
function display(obj:{
    name : string,
    age : number
})
{
    console.log('Name ',obj.name,' Age ',obj.age);
}
display(obj);
display({
    name : 'Something',
    age : 100
})