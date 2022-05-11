export function join(array = [], separator = '') {
    if (separator === null || separator === undefined) {
        separator = '';
    }
    let joinString = '';
    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            joinString += array[i] + separator;
        } else {
            joinString += array[i];
        }
    }
    return joinString;
}

const test = join(['apple', 2.3], ', ');
console.log(test);
