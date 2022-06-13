class Cube {
    constructor(length) {
        this.length = length;
    }

    get surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }

    set surfaceArea(value) {
        this.length = Math.sqrt(value / 6);
    }

    get volume() {
        return Math.pow(this.length, 3);
    }

    set volume(value) {
        this.length = Math.cbrt(value);
    }
}


cube = new Cube(1);

console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);

cube.length = 2;

console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);

cube.surfaceArea = 54;

console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);

cube.volume = 125;

console.log(cube.length);
console.log(cube.surfaceArea);
console.log(cube.volume);