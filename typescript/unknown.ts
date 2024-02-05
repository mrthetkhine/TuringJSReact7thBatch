let some:any = {
    name: 'TK'
};
console.log('Some.name ',some.name);

let another :unknown = {
    name: 'TK'
};
console.log('Another ',another);
function fail(msg: string): never {
    throw new Error(msg);
}