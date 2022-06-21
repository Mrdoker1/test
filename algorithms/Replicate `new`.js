function Person (name, age) {
    this.name = name;
    this.age = age;
}
  
Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
};

function nouveau (Constructor, ...args) {
    let obj = {
      constructor: Constructor
    }
    if (Array.isArray(Constructor())) {
        return Constructor();
    } 
    if (Constructor() instanceof Date) {
        return Constructor();
    }
    if (!Constructor() instanceof Object) {
        return Constructor();
    }
    if (typeof Constructor() === 'object' && Constructor() !== null) {
        return Constructor();
    }
    if (typeof Constructor() === 'function'){
      return obj.constructor();
    }
    obj.constructor(...args)
    Object.setPrototypeOf(obj, Constructor.prototype)
    return obj
}


var john = nouveau(Person, 'John', 30);
var jack = nouveau(Person, 'Jack', 40);

console.log(john.name);
console.log(john.sayHi());

console.log(jack.name);
console.log(jack.sayHi());