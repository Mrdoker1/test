function recycle(array) {

    let paper = []
    let glass = []
    let organic = []
    let plastic = []

    array.forEach(element => {
        let type = element.type
        for (key in element) {
            if (key == 'material' || key == 'secondMaterial') {
                if (element[key] == 'paper' || element[key] == 'paper') {
                    paper.push(type)
                }
                if (element[key] == 'glass' || element[key] == 'glass') {
                    glass.push(type)
                }
                if (element[key] == 'organic' || element[key] == 'organic') {
                    organic.push(type)
                }
                if (element[key] == 'plastic' || element[key] == 'plastic') {
                    plastic.push(type)
                }
            }
        }
    });
    return [paper, glass, organic, plastic]
}

console.log(recycle(input = [
    { "type": "rotten apples", "material": "organic" },
    { "type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic" },
    { "type": "wine bottle", "material": "glass", "secondMaterial": "paper" },
    { "type": "amazon box", "material": "paper" },
    { "type": "beer bottle", "material": "glass", "secondMaterial": "paper" }
]));