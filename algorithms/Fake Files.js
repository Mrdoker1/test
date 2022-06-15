// class File {
//     #fullName;
//     #contents;
//     #stringPointer;
//     #charPointer;

//     constructor(fullName, contents) {
//         this.#fullName = fullName;
//         this.#contents = contents.replace(/\\s/gm, ' ');
//         this.#stringPointer = 0;
//         this.#charPointer = 0;
//     }

//     get filename() {
//         return this.#fullName.replace(/\.[^/.]+$/, "");
//     }

//     get fullName() {
//         return this.#fullName;
//     }

//     get extension() {
//         return this.#fullName.split('.').pop();
//     }

//     set fullName(value) {
//         throw console.error('Fullname property changing restricted!');
//     }

//     set filename(value) {
//         throw console.error('Filename property changing restricted!');
//     }

//     set extension(value) {
//         throw console.error('File extension property changing restricted!');
//     }

//     getContents() {
//         return this.#contents;
//     }

//     write(str) {
//         this.#stringPointer = 0;
//         this.#charPointer = 0;
//         this.#contents += `\n${str.replace(/\\s/g, ' ')}`
//     }
//     gets() {
//         return this.#contents.split('\n')[this.#stringPointer++];
//     }
//     getc() {
//         return this.#contents.split('\n').join('').split('')[this.#charPointer++];
//     }
// }

// class File {
//     constructor(file, contents) {
//       Object.defineProperties(this, {
//         'fullName': { value: file },
//         'filename': {
//           value: file.slice(0, file.lastIndexOf('.'))
//         },
//         'extension': {
//           value: file.slice(file.lastIndexOf('.') + 1)
//         },
//         'line': {
//           value: 0,
//           configurable: true,
//           writable: true
//         },
//         'char': {
//           value: 0,
//           configurable: true,
//           writable: true
//         },
//         'contents': {
//           value: contents,
//           configurable: true,
//           writable: true
//         }
//       });
//     }
//     getContents() {
//       return this.contents;
//     }
//     write(str) {
//       this.contents += (this.contents ? '\n' : '') + str;
//     }
//     gets() {
//       return this.getContents().split('\n')[this.line++];
//     }
//     getc() {
//       return this.getContents()[this.char++];
//     }
//   }

class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
       // this._contents = contents.replace(/^\\n/, '');
        this._contents = contents;
        this._stringPointer = 0;
        this._charPointer = 0;
    }

    get filename() {
        return this._fullName.replace(/\.[^/.]+$/, "");
    }

    get fullName() {
        return this._fullName;
    }

    get extension() {
        return this._fullName.split('.').pop();
    }

    set fullName(value) {
       // throw console.error('Fullname property changing restricted!');
    }

    set filename(value) {
       // throw console.error('Filename property changing restricted!');
    }

    set extension(value) {
       // throw console.error('File extension property changing restricted!');
    }

    getContents() {
        return this._contents;
    }

    write(str) {
        this._stringPointer = 0;
        this._charPointer = 0;
        this._contents === '' ? this._contents += str : this._contents += `\n${str}`; 
    }
    gets() {
        return this._contents.split('\n')[this._stringPointer++];
    }
    getc() {
        return this._contents.split('')[this._charPointer++];
    }
}


// let myFile = new File("hello.txt", "Hello World");
// console.log(myFile.filename);
// console.log(myFile.fullName);
// console.log(myFile.extension);
// console.log(myFile.getContents());


//myFile.filename = "goodbye"; // Reassignment should fail

var myFile = new File("example.txt", "Li\\sne 0");
myFile.write("Line 1");
myFile.write("Line 2");
myFile.write("Line 3");


console.log(myFile._contents);