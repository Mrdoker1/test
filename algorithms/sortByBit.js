function sortByBit(arr) {

    binArr = [];

    arr.forEach(element => {
        binArr.push([element, getBinAmount(element)])
    });

    arr.length = 0;
    arr.push(...sortBin(binArr));
    return arr;
}

function getBinAmount(num) {
    let bin = (num >>> 0).toString(2).split('')
    let count = 0;
    bin.forEach(element => {
        if (element == 1) {
            count++
        }
    });

    return count
}

function sortBin(arr) {

    let result = [];

    arr.sort((a, b) => {

        if (a[1] == b[1]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    })

    arr.forEach(element => {
        result.push(element[0])
    })

    return result
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])) //=> [1, 8, 3, 3, 5, 6, 9, 7]
console.log(sortByBit([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0])) //=> [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]