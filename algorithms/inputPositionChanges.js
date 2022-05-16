if (event.key === 'ArrowDown') {

    let arr = this.input.value.split('\n');
    let size = this.input.value.length;
    let position = this.input.selectionStart;


    if (arr.length > 1) {
        if (this.input.selectionStart < size - arr[arr.length - 1].length) {

            let i = 0;
            let sum = arr[i].length;

            while (sum < position - i) {
                i++;
                sum += arr[i].length;
            }

            sum += i;

            let pos = arr[i].length - Math.abs(sum - position);
            let upPos = sum + pos;

            upPos++;

            if (pos > arr[i + 1].length) {
                this.input.selectionStart = sum + arr[i + 1].length + 1;
                this.input.selectionEnd = sum + arr[i + 1].length + 1;
            } else {
                this.input.selectionStart = upPos;
                this.input.selectionEnd = upPos;
            }
        }
    }
}

if (event.key === 'ArrowUp') {

    let arr = this.input.value.split('\n');
    let position = this.input.selectionStart - arr.length + 1;

    if (arr.length > 1) {
        if (this.input.selectionStart > arr[0].length) {

            let i = 0;
            let sum = arr[i].length;

            do {
                i++;
                sum += arr[i].length;
            }
            while (sum < position)

            let pos = arr[i].length - Math.abs(position - sum);

            let upPos = sum - arr[i].length - arr[i - 1].length + pos;

            if (pos > arr[i - 1].length) {
                this.input.selectionStart = arr[i - 1].length;
                this.input.selectionEnd = arr[i - 1].length;
            } else {
                this.input.selectionStart = upPos + arr.length - 2;
                this.input.selectionEnd = upPos + arr.length - 2;
            }
        }
    }
}

if (event.key === 'ArrowLeft' && !event.isTrusted) {
    this.input.selectionEnd = this.input.selectionEnd - 1;
}

if (event.key === 'ArrowRight' && !event.isTrusted) {
    this.input.selectionEnd = this.input.selectionEnd + 1;
    this.input.selectionStart = this.input.selectionStart + 1;
}