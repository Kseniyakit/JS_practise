let myNumber = 12345;
let myString = "some string";
let myBool = true;
let myNull = null;
let mySymbol = Symbol();
let myUndef = undefined;
typeof

function a() {};
typeof [];
Array.isArray([]);
typeof null;
//_____________
//Целочисленные формы записи:
console.log(10); //десятиричная
console.log(0xfffccc); //шестнадцатиричная
console.log(0345); //восьмиричная
console.log(0123456789); //десятичная

//_____________
//Вещественные формы записи:
console.log(12.45);
console.log(.89);
console.log(1.24e4);

//NAN
console.log(0 / 0);
console.log(Infinity / Infinity);
console.log(Math.sqrt(-10));
console.log(NaN === NaN);

//Infinity
console.log(1 / 0);
console.log(-1 / 0);


//Number
let number = 4000;
console.log(typeof number);
let newNumber = new Number(4000);
console.log(typeof newNumber);

console.log(newNumber.toFixed(2));
console.log(number.toFixed(2));

//Arithmatic operators
let count = 10;
console.log(++count);
console.log(count);
console.log(count++);
console.log(count);

//Arithmatic operators
let variable = 100;
variable = variable + 20;
console.log(variable);
let anotherVariable = 25;
anotherVariable = anotherVariable * 4;
console.log(anotherVariable);
console.log(variable += 20);
console.log(anotherVariable *= 4);


console.log(5 < 10);
console.log(5 > 10);
console.log(10 >= 10);
console.log(8 <= 10);
console.log(10 === 10);
console.log(10 !== 10);

console.log(10 == '10');
console.log(10 === '10');
console.log(0.2 + 0.1);

//String
console.log("string");
console.log('newString');
console.log('anotherString');
console.log("this is my string");
console.log("this is my \"string\"");

//Boolean
Boolean(0);
Boolean(-0);
Boolean("");
Boolean(null);
Boolean(undefined);
Boolean(NaN);


let number = 5;
console.log(number && 10 + number);
let prevString = "my String";
let newString = prevString || "default";
console.log(newString);

//Null & Undefined
let temp;
let obj = {};
console.log(obj.property);
let ar = [1, 2, 3];
console.log([3]);
const func = () => { return; }
console.log(func());
console.log(typeof null);
console.log(typeof undefined);
console.log(null == undefined);
console.log(null === undefined);

//Symbol
let symbol = Symbol();
console.log(symbol);
console.log(typeof symbol);

let symbol = Symbol("name");
console.log(symbol);
let anotherSymbol = Symbol("name");
console.log(anotherSymbol);
console.log(symbol === anotherSymbol);

let symbol = Symbol.for("name");
console.log(symbol);
let anotherSymbol = Symbol.for("name");
console.log(symbol === anotherSymbol);

let symbol = Symbol.for("name");
let name = Symbol.keyFor(symbol);
console.log(name);

let user = { userName: "Vasya", [Symbol('password')]: "asdf" }
console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
let password = user[Symbol.for('password')];
console.log(password);

let password = Symbol();
let user = { userName: "Vasya", [password]: "asdf" };

//Oject
let newObject = new Object();
newObject.name = 'Fred';

let newObject = Object.create({ x: 20, y: 30 });
console.log(newObject.hasOwnProperty('x'));

let newOject = Object.create({ x: 20, y: 30 });
newObject.x = 40;
console.log(newObject.hasOwnProperty('x'));
console.log(newObject.x);
delete newObject.x;
console.log(newObject);
console.log('x' in newObject);
console.log('z' in newObject);
console.log(newObject.x);
console.log(newObject.z);

//Сравнение

false && console.log(1);
false & console.log(1);
true || console.log(2);
true | console.log(2);


for //(“инициализация”; “условие”; “инкремент/декремент”) тело цикла.
for (;;); //- бесконечный цикл который делает ничего;
for (;;) { console.log('a') }; //- бесконечный цикл который выводит а;
for (var i = 0; i < 10; i++);
console.log(i); //===> 0 - 9
for (var i = 10; i--;);
console.log(i); //===> 9 - 0

let i = 0;
while (i < 10);
console.log(i++); //===> 0 - 9
while (i--) console.log(i++); //===> 9 - 0

var myFunc = function(name) { return 'Hello' + name; }
    () => console.log('launch anonymous function!!!');

let sum = new Function('a,b', 'return a+b;');
let result = sum(1, 2);
console.log(result);

typeof yourFunc;
typeof String;
typeof new String();