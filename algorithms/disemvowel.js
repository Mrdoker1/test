function disemvowel(str) {
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let result = '';
    str.split('').forEach(char => {
        vowels.includes(char) ? result += '' : result += char;
    })
    return result;
}

console.log(disemvowel("abc"));