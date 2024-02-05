type Stack = {
    items:string[];
}
let stack : Stack = {
    items: ['Hello','Hi']
}
type GenStack<Type> = {
    items: Type[];
}
let numStack : GenStack<number> = {
    items :[1,2,2]
}
let strStack : GenStack<string> = {
    items :['1','2','3']
}
let numArr :Array<number> = [10,20,30];
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
//roArray[0] ="Somethingg";