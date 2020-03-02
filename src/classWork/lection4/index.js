//This
function foo() {
    this.value = 5;
    console.log(this === window);
}

foo(); // true

var myObject = new foo();
console.log(myObject.value === 5); // true

var myObject = {
    myself: function() {
        return this;
    }
}
console.log(myObject.myself() === myObject); // true

//Arrays
var fruits = [element0, element1, elementN];
var fruits = new Array(element0, element1, elementN);
var fruits = new Array(arrayLength) arrayLength;
var arr = [99, 'Name', { city: 'Boston' }, true, [1, 2, 3]];

//Arrays. Methods
var values = [5, 8];
values.push(7);
values.push(3);
var lastElement = values.pop();
values.unshift(9);
values.unshift(2);
var firstElement = values.shift();
console.log(values, firstElement, lastElement); === > [9, 5, 8, 7] 2 3

Array.of(1, 2, 3); // [1, 2, 3]
Array.isArray(1, 2, 3); // false
Array.isArray([1, 2, 3]); // true
Array.from(obj, mapFn, thisArg); // где thisArg - this для mapFn (коллбек map);
Array.from([1, 2, 3], x => x + x) // [2, 4, 6]

var values = [3, 9, 15, -5, 12];
console.log(values.find(element => element > 13)); // 15
console.log(values.findIndex(element => element > 13)); // 2

var values = [2, 9, 9];
values.includes(2) // true values.includes(7) // false
values.indexOf(9) // 1 values.indexOf(7) // -1
values.lastIndexOf(9) // 2 values.lastIndexOf(7) // -1

var words = ['number', 'string', 'symbol', 'object', 'undefined'];
console.log(words.filter(word => word.length > 6)); // ["undefined"]

var values = [1, 2, [3, 4, [5, 6]]];
console.log(values.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(values.flat(2)); // [1, 2, 3, 4, 5, 6]

var chars = ['a', 'b', 'c'];
chars.forEach(element => console.log(element)); // a b c

var numbers = [1, 4, 9, 16];
console.log(numbers.map(x => x * 2)); // [2, 8, 18, 32]

var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer)); // 30
console.log(numbers.reduce(reducer, 5)); // 35

var values = [1, 2, 3, 4, 5];
console.log(values.every(element => element % 2 === 0)); // false
console.log(values.every(element => element > 10)); // false
console.log(values.some(element => element % 2 === 0)); // true
console.log(values.some(element => element > 2)); // true

console.log(['a', 'b', 'c'].concat(['d', 'e', 'f'])); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(['a', 'b', 'c'].concat(5)); // ['a', 'b', 'c', 5]
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // ["camel", "duck"]

var arr = ['a', 'b', 'c'];
arr.splice(1, 1); // b console.log(arr) // [“a”, “c”];
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
console.log(months); // ["Jan", "Feb", "March", "April", "May"]

var values = [1, 2, 15];
console.log(values.sort()); // [1, 15, 2]

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]); // 5

//Arrays. Length
var array = [];
array[10] = '';
console.log(array.length); // 11

var object = new Object();
var object = Object.create(null);
var object = {};

var Human = function(name) {
    this.name = name;
}

Human.prototype.anyMethod = function() {
    console.log(this.name + 'do something...');
}
var man = new Human('Vasya');
var woman = new Human('Kasya');
console.log(man.name, '', woman.name); // Vasya Kasya
man.anyMethod();
woman.anyMethod();

//Functions
console.log(man.constructor); // function (name) {...}
console.log(Human.prototype.constructor); // function (name) {...}
console.log(man instanceof Human); // true
console.log(Human.prototype.isPrototypeOf(man)); // true

var Developer = function(name, skills) {
    Human.apply(this, arguments);
    this.skills = skills || [];
};
Developer.prototype = Object.create(Human.prototype);
Developer.prototype.constructor = Developer; // чтобы свойство
//constructor перестало ссылаться на функцию Human.
var developer = new Developer('Petya', ['JavaScript', 'Node.js', 'Java']);
console.log(developer.name); // Petya
console.log(developer.skills); // [“JavaScript”, “Node.js”, “Java”]
developer.anyMethod(); // Petya do something...

console.log(developer instanceof Developer); // true
console.log(developer instanceof Human); // true
console.log(developer.toString()); // [object Object] - переопределим его
Human.prototype.toString = function() { return this.name };

var Human = function(name, born, city) {
    // this = {} - неявно создаётся новый объект
    // this.__proto__ = Human.prototype - тоже происходит неявно
    this.name = name;
    this.born = born;
    this.city = city;
    getAge = function() { return new Date().getFullYear() = this.born }
        // методу getAge место в свойстве prototype, поскольку он одинаков
        // для всех, а в данном случае будет создаваться для всех.
        // return this - новый объект возвращается из функции
}

Human.prototype.getAge = function() {
    console.log(new Date().getFullYear = this.born);
}
var user = new Human('Name', 1985, 'Boston');
user.getAge() // 35