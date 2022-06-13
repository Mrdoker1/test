class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name}. I have ${this.legs} legs and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }
    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}

let cat = new Cat('cat', 1, 'status 1');
let shark = new Shark('shark', 2, 'status 2');
let dog = new Dog('dog', 3, 'status 3');

console.log(shark.introduce());
console.log(cat.introduce());
console.log(dog.introduce());


console.log(cat.status);