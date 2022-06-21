class Engine {
    constructor(watts) {
      this.watts = watts;
    }
    get horsepower() {
      return this.watts / 745.7;
    }
    set horsepower(hp) {
      this.watts = 745.7 * hp;
    }
  }

  class Person {
    // You can't redeclare "Person", so this won't work...
  }
  
  Person.prototype.name = ???; // Will this work?
  
  // Maybe javascript provides the ability to add
  // getter and setters to an existing class?