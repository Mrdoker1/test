function getLengthOfMissingArray(arrayOfArrays) {

    let arr = []
    let result = 0;
    let haveEmpty = false;

    if (arrayOfArrays == null) {
        return result;
    }

    arrayOfArrays.forEach(element => {

        if (element != null && element.length != 0) {
            arr.push(element.length)
        } else {
            haveEmpty = true;
        }
    });

    if (haveEmpty) {
        return result;
    }

    arr.sort((a, b) => a - b)

    arr.forEach((element, index) => {
        if (arr[index + 1] - element === 2) {
            console.log(arr[index + 1] - element)
            result = arr[index + 1] - 1
        }

    })

    return result;
}


console.log(getLengthOfMissingArray([
    [],
    [1, 2],
    [4, 5, 1, 1],
    [1],
    [5, 6, 7, 8, 9]
]))

// console.log(getLengthOfMissingArray([
//     ['a', 'a', 'a'],
//     ['a', 'a'],
//     ['a', 'a', 'a', 'a'],
//     ['a'],
//     ['a', 'a', 'a', 'a', 'a', 'a']
// ]))

//1) convert array to length array [2,4,1,5]
//2) sort array [1,2,4,5]
//3) find empty num (2 - 1) => 1 => next (4 - 2) => 2 => found => (4-1) = 3 => result = 3