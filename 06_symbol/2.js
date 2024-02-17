let a = 1
let b = 1
console.log(a === b);

let s1 = Symbol('a')
let s2 = Symbol('a')
console.log(s1.description);
console.log(s1 === s2);

// point the same Symbol address
let s3 = Symbol.for('c')
let s4 = Symbol.for('c')
console.log(s3 === s4);

let s5 = Symbol.for('symbol') 
let s6 = Symbol('symbol') 
console.log(Symbol.keyFor(s5)); // symbol
console.log(Symbol.keyFor(s6)); // undefined
