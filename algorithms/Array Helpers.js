
Array.prototype.square = function () {
    const iterator = this.values();
    const newArr = [];
    for (let element of iterator) {
      newArr.push(element * element);
    }
    return newArr;
};

Array.prototype.cube = function () {
    const iterator = this.values();
    const newArr = [];
    for (let element of iterator) {
      newArr.push(element * element * element);
    }
    return newArr;
};

Array.prototype.average = function () {
    const iterator = this.values();
    let sum = 0;

    if (this.length === 0) return NaN 
    else {
        for (let element of iterator) {
            sum += element;
          }
          return sum / this.length;
    }
};

Array.prototype.sum = function () {
    const iterator = this.values();
    let sum = 0;

    for (let element of iterator) {
        sum += element;
        }
    return sum;
};

Array.prototype.even = function () {
    const iterator = this.values();
    const newArr = [];
    for (let element of iterator) {
      if (element % 2 == 0){
        newArr.push(element);
      }
    }
    return newArr;
};

Array.prototype.odd = function () {
    const iterator = this.values();
    const newArr = [];
    for (let element of iterator) {
      if (element % 2 != 0){
        newArr.push(element);
      }
    }
    return newArr;
};


let numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());


