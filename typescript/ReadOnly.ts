type Human ={
    readonly name: string;
    age :number;
    readonly address: {
        city:string;
        street: string;
    }
}
let h : Human ={
    name : 'TK',
    age:39,
    address:{
        city:'Ygn',
        street:'str1'
    }
};
//h.name = "Something else"
h.address.city = "MDY";