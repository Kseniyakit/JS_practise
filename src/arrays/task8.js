
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let a = array.slice(0, array.length/2);
let b = array.slice(array.length/2, array.length);
let c = b.concat(a);
console.log (c);
console.log (a);
console.log (b);