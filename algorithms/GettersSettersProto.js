class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  }

  Object.defineProperty(Person.prototype, 'name', {
    get: function() {
      return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
      this.firstName = value.split(' ')[0];
      this.lastName = value.split(' ')[1];
    }
  });

  let p = new Person('A', 'B');
  p.name = 'BBB CCC';
  console.log(p.firstName);
  console.log(p.lastName);

