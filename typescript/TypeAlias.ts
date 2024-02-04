type Point = {
    x: number;
    y: number;
};
/*
type Point = {
    z : number;
}
*/
type our_number= number;
  // Exactly the same as the earlier example
function printCoord(pt: Point) {
console.log("The coordinate's x value is " + pt.x);
console.log("The coordinate's y value is " + pt.y);
}
   
printCoord({ x: 100, y: 100});
let k :our_number = 2;