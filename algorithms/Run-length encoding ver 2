var runLengthEncoding = function(str) {

    arr = str.match(/(.)\1*/g)
    result = []

    if (arr != null) {

        arr.forEach(element => {
            result.push([element.length, element[0]])
        });

    }

    return result
}

console.log(runLengthEncoding("aaabbbaaac"));