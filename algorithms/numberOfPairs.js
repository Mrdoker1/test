function numberOfPairs(input, count = 0) {

    gloves = [...input]

    let first = gloves[0];
    let secondIndex = 0;
    gloves.shift();

    for (let i = 0; i < gloves.length; i++) {
        if (gloves[i] == first) {
            secondIndex = i;
            count++;
            gloves.splice(secondIndex, 1);
            break;
        }
    }

    // let frontPart = gloves.slice(0, secondIndex);
    // let lastPart = gloves.slice(secondIndex + 1); // index to end of array
    // gloves = [...frontPart, ...lastPart];

    if (gloves.length > 0) {
        return numberOfPairs(gloves, count)
    }

    return count
}

// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

console.log(numberOfPairs(['gray', 'gray', 'purple', 'purple']));
console.log(numberOfPairs(['red', 'green', 'blue']));
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));
console.log(numberOfPairs(['gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple']));
console.log(numberOfPairs(['gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'gray', 'gray', 'purple', 'purple', 'grey']));

//1) take first element, save it and remove from array  ['gray', 'gray', 'purple', 'purple'] =>  ['gray', 'purple', 'purple']
//2) try to find same element, if found count++ and delete it ['gray', 'purple', 'purple'] => ['purple', 'purple'] count = 1
//3) repeat