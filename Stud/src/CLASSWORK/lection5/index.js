function Programmer(name, age) {
    this.age = age;
    this.name = name;

    function toStringArgs() {
        console.log(this);
    }
    this.toStringArgs = toStringArgs;
}

var programmerFirst = new Programmer('Tym', 18);
programmerFirst.toStringArgs();

function InheritedClass() {
    this.enable = function() {};
    this.disable = function() {};
}

function Programmer(name, age) {
    InheritedClass.call(this);
}

var parentEnable = this.enable;
this.enable = function() {
    this.parentEnable.call(this);
    this.run();
}

function Person(name, age) {
    this.age = age;
    this.name = name;
    this.isSit = false;
    this.isRun = false;

    this.runToggle = () => {
        this.isRun = !this.isRun;
    };
};

function PersonMan() {
    Person.apply(this, arguments);
    this.gender = 'male';
};

function PersonWoman() {
    Person.apply(this, arguments);
    this.gender = 'female';
    const parentRunToggle = this.runToggle;
    this.runToggle = function() {
        this.mood = 'I don\'t want run';
        parentRunToggle();
    }
};

const personManOne = new PersonMan('Vasiliy', 18);
const personWomanOne = new PersonWoman('Anjela', 20);
console.log(personManOne, personWomanOne);

function Animal(name) {
    this._name = name;
    this.speed = 0;
}
Animal.prototype.run = function(speed) {
    this.speed += speed;
    alert(this.name + 'бежит, скорость' + this.speed);
};
Animal.prototype.stop = function() {
    this.speed = 0;
    alert(this.name + ' cтоит');
};
const nAn = new Animal('Kot');
nAn.run(20);

function Rabbit(name){
    this.name = name;
    this.speed = 0;
}
function Rabbit(name){
    Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.jump = function(){
    this.jump = 1;
    alert (this.name + ' прыгает');
}
const nRab = new Rabbit('Vasya');
nRab.jump();
nRab.run(30);

function Rabbit(name){
    Animal.apply(this, arguments);
}

function Person(name, age) {
    this.age = age;
    this.name = name;
    this.isSit = false;
    this.isRun = false;
}
    Person.prototype.runToggle = function() {
        this.isRun = !this.isRun;
    };
    Person.prototype.sitToggle = function() {
        this.isSit = !this.isSit;
    };


function PersonMan() {
    Person.apply(this, arguments);
    this.isSleep = false;
    this.gender = 'male';
};
PersonMan.prototype = Object.create(Person.prototype);
PersonMan.prototype.constructor = PersonMan;
PersonMan.prototype.sleep = function(){
    this.isSleep = true;
}
PersonMan.prototype.sitToggle = function(){
    Person.prototype.sitToggle.apply(this, arguments);
    this.test='never sleep';
}

function PersonWoman() {
   
    this.gender = 'female';
  
};
const person = new Person('test', 10);
const personManOne = new PersonMan('Vasiliy', 18);
const personWomanOne = new PersonWoman('Anjela', 20);
console.log(personManOne, personWomanOne);