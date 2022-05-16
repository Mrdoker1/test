// function deepCount(a) {

//     a.forEach(element => {
//         if (Array.isArray(element)) {
//             deep++;
//             deepCount(a.flat(), deep)
//         }
//     });
//     return length + deep;
// }

function deepCount(a, result = 0) {

    let arr = [];

    if (haveArr(a)) {
        arr = expandArray(a)[0]
        result += expandArray(a)[1]
    } else {
        return (result + a.length)
    }
    return deepCount(arr, result)

}

function expandArray(a, deep = 0) {

    a.forEach(element => {
        if (Array.isArray(element)) {
            deep++
        }
    })

    return [a.flat(), deep];

}

function haveArr(a) {

    let result = false;

    a.forEach(element => {
        if (Array.isArray(element)) {
            result = true;
        }
    })
    return result;
}

// Object.defineProperty(Array.prototype, 'flat', {
//     value: function(depth = 1) {
//       return this.reduce(function (flat, toFlatten) {
//         return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
//       }, []);
//     }
// });

// console.log(expandArray([1, [4]]))

console.log(deepCount(["x", "y", ["z"]]))
console.log(deepCount([1, 2, [3, 4, [5]]]))