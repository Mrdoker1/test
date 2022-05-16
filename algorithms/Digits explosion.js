function explode(s) {
    let result = '';
    s.forEach((element) => {
        for (i = 1; i <= element; i++) {
            result += element
        }
    });

    return result;
}

console.log(explode([1, 2, 3]));