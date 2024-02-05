const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
      console.log('constructor');
    }
};
let obj = new someClass('Hello');
console.log('Obj ',obj);