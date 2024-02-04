type PromiseStatus = "pending"|"fullfilled"|"rejected";
type Alignment = "center"| "left"|"right";

function align(alignment:Alignment)
{
    console.log(alignment);
}
align('center');
//align('something');

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}
liveDangerously(1);