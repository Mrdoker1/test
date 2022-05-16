function calculate(...args) {

    let sum = 0;

    args.forEach(element => {
        sum += element
    })

    return (...args) => {
        args.forEach(element => {
            sum += element
        })

        return sum
    }
}

console.log(calculate(1, 2, 3)(1, -2))