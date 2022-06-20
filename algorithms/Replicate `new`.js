function Person (name, func) {
    this.name = name;
    this.greet = func;
}
  
Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
};

function nouveau (Constructor, ...args) {
    const obj = {
        constructor: Constructor
    }
    obj.constructor(...args)
    let object = Object.keys(obj).reduce((a, key) => {
        a[ key ] = obj[ key ]
        return a
    }, {});

    for(var k in Constructor.prototype) object[k]=Constructor.prototype[k];

    Object.setPrototypeOf(object, Constructor.prototype)
    return object;
}

var guy = nouveau(Person, 'Guy', function(){console.log('Hi')} );

console.log(nouveau(Person, 'Guy', function(){console.log('Hi')}));
console.log(guy.name);
console.log(guy.sayHi());