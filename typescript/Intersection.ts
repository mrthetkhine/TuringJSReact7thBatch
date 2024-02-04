type Color ={
    color: string;
}
type Border = {
    borderWidth:number;
}
type BorderedColor = Color & Border;
let data :BorderedColor = {
    color: 'red',
    borderWidth:10
}