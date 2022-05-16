function nthFibo(n) {

    return createFibo(n)[n - 1]
}


function createFibo(size) {
    let firstNum = 0;
    let secondNum = 1;
    let arr = [firstNum, secondNum]
    let i = 0;

    do {
        arr.push(arr[i] + arr[i + 1]);
        i++;
    }
    while (arr.length < size)

    return arr
}



console.log(nthFibo(4))