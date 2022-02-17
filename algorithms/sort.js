let words = ['zbanana', 'grapefruit', 'zbanana', 'grapefruit', 'zbanana', 'orange', 'zbanana'];

///[banana,grapefruit,orange]

function sort(arr) {
    let result = {};

    arr.forEach(element => result[element] = (result[element] || 0) + 1)

    result = (() => {
        let i = []
        for (let k in result)
            i.push({ value: k, count: result[k] })
        return i
    })()

    result = result.sort((a, b) => b.count - a.count).map(i => i.value)

    return result;

}

console.log(sort(words));