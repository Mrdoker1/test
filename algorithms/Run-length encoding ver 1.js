var runLengthEncoding = function(str) {


    arr = []
    result = [];

    str.split('').forEach((char, index) => {
        arr.push([char, 0, -1])
    });

    arr.forEach((element, i) => {
        arr.forEach((char, index) => {
            if (element[0] == char[0]) {
                char[1]++;
                if (i < index) {
                    char[2] = index
                }
            }
        })
    })

    arr.forEach(element => {
        if (element[2] == -1) {
            result.push([element[1], element[0]])
        }
    })

    return result
}

console.log(runLengthEncoding("aaabbbaaa"));