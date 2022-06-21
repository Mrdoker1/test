Array.prototype.reduce = function(process, initial) {
    const iterator = this.values();
    // if (initial == undefined) initial = this[0];
    // for (let element of iterator) {
    //     initial = process(initial, element);
    // }

    let i;
    if (initial == undefined) {
        initial = this[0];
        i = 1;
    } else i = 0;

    for(i; i < this.length; i++){
        initial = process(initial, this[i]);
    }
    return initial;
}

let func = function(sum, next){return sum+next};
let funcObj = function(obj, elem){if(!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj};
let sum = function(x,y){return x+y}

let numbers = [1, 2, 3];
let letters = ['a','b','a'];
let falafel = ['fall','aff','les'];

console.log(numbers.reduce(func, 0));
console.log(letters.reduce(funcObj, {}));
console.log(falafel.reduce(sum));


