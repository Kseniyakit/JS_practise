window.open(url, name, params);
var a = 5;
alert(window.a);
window.a = 5;
alert(a);

function sayHi(name) {
    //LexicalEnvironment = {name: 'Vasya', phrase: undefined}
    var phrase = "Hi, " + name;
    //LexicalEnvironment = {name: 'Vasya', phrase: 'Hi, vasya'}
    alert(phrase);
}

function sayHiBye(firstName, lastName) {
    alert('Hello, ' + getFullName());
    alert('Bye, ' + getFullName());

    function getFullName() {
        return firstName + '' + lastName;
    }
}
sayHiBye('Vasya', 'Pupkin');

function makeCounter() {
    var currentCount = 1;
    return function() {
        return currentCount++;
    };
};
var counter = makeCounter();
alert(counter());
alert(counter());
alert(counter());
var counter2 = makeCounter();
alert(counter2());

function f() {};
f.test = 5;

//Recurtion
function pow(x, n) {
    if (n !== 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}